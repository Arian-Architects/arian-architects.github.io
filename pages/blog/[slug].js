import SEO from '@/components/seo-head'
import { useRouter } from 'next/router'
import Button from '@/components/button'
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import firebase, { firestore } from '@/lib/firebase'
import { scrollProjects } from '@/components/scroll'
import { getAllSnippets, getPageContentBySlug } from '@/lib/markdown'
import { deploymentUrl, month, productionUrl, weekday } from '@/lib/data'

const Snippet = ({ page }) => {
  const router = new useRouter()
  const [name, setName] = useState('')
  const [likes, setLikes] = useState(0)
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const [comments, setComments] = useState([])

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  useEffect(() => {
    getLikes()
  }, [])

  const postLike = () => {
    fetch('https://api.ipify.org/?format=json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        firestore
          .collection('likes')
          .doc(page.slug)
          .set(
            {
              [res['ip']]: null,
            },
            { merge: true }
          )
          .then(() => {
            getLikes()
          })
      })
  }

  const getLikes = () => {
    firestore
      .collection('likes')
      .doc(page.slug)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setLikes(Object.keys(doc.data()).length)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const writeComment = (e) => {
    e.preventDefault()
    if (name.length > 3 && content.length > 3 && content.length < 500) {
      let temp = {
        name: name,
        slug: page.slug,
        content: content,
        time: firebase.firestore.Timestamp.fromDate(new Date()),
      }
      if (validateEmail(email)) temp['email'] = email
      firestore
        .collection('comments')
        .add(temp)
        .then(() => {
          setName('')
          setEmail('')
          setContent('')
        })
        .catch((err) => {
          console.error('error adding comment: ', err)
        })
    }
  }

  const getComments = () => {
    firestore
      .collection('comments')
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs
          .map((doc) => doc.data())
          .filter((doc) => doc.slug === page.slug)
          .map((doc) => {
            return { id: doc.id, ...doc }
          })
        setComments(posts)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return router.isFallback || !page ? (
    <div>Loading...</div>
  ) : (
    <>
      <SEO
        slug={page.slug}
        title={page.title}
        description={page.excerpt}
        image={`${deploymentUrl}/${page.image}`}
        cannonical={`${productionUrl}/blog/${page.slug}`}
      />
      <div className="pt-8 flex flex-col items-center text-center">
        <div className="flex flex-col items-center w-[75vw] space-y-8">
          <h1 className="leading-[3rem] text-4xl sm:text-5xl text-black">
            {page.title}
          </h1>
          <span className="text-gray-700 text-md">{`${
            weekday[new Date(page.date).getDay()]
          }, ${month[new Date(page.date).getMonth()]} ${new Date(
            page.date
          ).getDate()} ${new Date(page.date).getFullYear()}`}</span>
          <span className="flex flex-row items-center space-x-5">
            <div className="relative w-[30px] h-[30px] border bg-gray-200 rounded-full">
              <img
                loading="lazy"
                decoding="async"
                alt="Ishant Jain Twitter Image"
                title="Ishant Jain Twitter Image"
                src={`${deploymentUrl}/ishant-jain.jpg`}
                className="absolute w-[30px] h-[30px] top-0 left-0 rounded-full"
              />
            </div>
            <span className="flex flex-col items-center space-y-0">
              <span className="font-bold">Ishant Jain</span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="m-0 p-0 text-blue-500"
                href="https://twitter.com/ijainishant"
              >
                @ijainishant
              </a>
            </span>
          </span>
          <svg
            onClick={() => scrollProjects('blog')}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
      <div
        id="blog"
        className="mt-10 mb-10 h-[1px] px-4 md:px-32 bg-gray-200 w-full"
      />
      <div className="flex flex-col items-center w-full">
        <div className="pb-10 flex flex-col items-start w-[75vw]">
          <div className="w-full flex flex-col items-start space-y-8">
            <div className="relative bg-gray-200 w-[75vw] h-[250px]">
              <img
                loading="lazy"
                decoding="async"
                alt="Blog Cover Image"
                title="Blog Cover Image"
                className="rounded object-cover absolute top-0 left-0 w-[75vw] h-[250px]"
                src={`${deploymentUrl}/${page.image}`}
              />
            </div>
            <article className="prose lg:prose-xl max-w-none">
              <ReactMarkdown children={page.content} />
            </article>
          </div>
        </div>
        <div className="h-[1px] px-4 md:px-32 bg-gray-300 w-[75vw]" />
        <div className="pb-10 flex flex-row items-center justify-between w-[75vw]">
          <div
            title="Likes"
            onClick={postLike}
            className="cursor-pointer mt-10 flex flex-row items-center space-x-3"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z" />
            </svg>
            <span className="font-bold">{likes == 0 ? '---' : likes}</span>
          </div>
          <div className="mt-10 flex flex-row space-x-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
              title={`Twitter, ${page.title} - Arian Architects`}
              aria-label={`Twitter, ${page.title} - Arian Architects`}
              href={`https://twitter.com/intent/tweet?text=${productionUrl}/blog/${page.slug}`}
            >
              <svg width="29" height="29">
                <path d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z"></path>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
              title={`LinkedIn, ${page.title} - Arian Architects`}
              aria-label={`LinkedIn, ${page.title} - Arian Architects`}
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${productionUrl}/blog/${page.slug}`}
            >
              <svg width="29" height="29">
                <path d="M5 6.36C5 5.61 5.63 5 6.4 5h16.2c.77 0 1.4.61 1.4 1.36v16.28c0 .75-.63 1.36-1.4 1.36H6.4c-.77 0-1.4-.6-1.4-1.36V6.36z"></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.76 20.9v-8.57H7.89v8.58h2.87zm-1.44-9.75c1 0 1.63-.65 1.63-1.48-.02-.84-.62-1.48-1.6-1.48-.99 0-1.63.64-1.63 1.48 0 .83.62 1.48 1.59 1.48h.01zM12.35 20.9h2.87v-4.79c0-.25.02-.5.1-.7.2-.5.67-1.04 1.46-1.04 1.04 0 1.46.8 1.46 1.95v4.59h2.87v-4.92c0-2.64-1.42-3.87-3.3-3.87-1.55 0-2.23.86-2.61 1.45h.02v-1.24h-2.87c.04.8 0 8.58 0 8.58z"
                  fill="#fff"
                ></path>
              </svg>
            </a>
            <a
              className="cursor-pointer"
              onClick={() => {
                navigator.clipboard
                  .writeText(`${productionUrl}/blog/${page.slug}`)
                  .then(
                    function () {
                      console.log('Successfully copied.')
                    },
                    function () {
                      console.log('Failed to copy.')
                    }
                  )
              }}
              aria-label={`Link, ${page.title} - Arian Architects`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="h-[1px] px-4 md:px-32 bg-gray-300 w-[75vw]" />
        <div className="pb-10 flex flex-col items-start w-[75vw]">
          <form onSubmit={writeComment} className="pt-10 flex flex-col w-full">
            <h1 className="font-semibold text-black text-lg">
              Write a comment
            </h1>
            <div className="flex flex-row space-x-5 items-start">
              <input
                required
                value={name}
                placeholder="Name*"
                onChange={(e) => setName(e.target.value)}
                className="mt-5 w-1/2 appearance-none transition-colors outline-none ring-0 duration-500 px-5 py-2 border hover:border-black rounded hover:shadow text-black"
              />
              <div className="mt-5 w-1/2 flex flex-col space-y-1">
                <input
                  value={email}
                  placeholder="Email (Optional)"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full appearance-none transition-colors outline-none ring-0 duration-500 px-5 py-2 border hover:border-black rounded hover:shadow text-black"
                />
                <span className="text-sm text-gray-400">
                  Email will remain confidential.
                </span>
              </div>
            </div>
            <textarea
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={'Comment*\nMaximum of 500 characters.'}
              className="mt-5 appearance-none transition-colors duration-500 outline-none ring-0 pt-5 px-5 pb-10 border hover:border-black rounded hover:shadow text-black"
            />
            <button
              type="submit"
              className="w-[250px] appearance-none mt-10 bg-white hover:bg-black text-black hover:text-white py-2 px-5 transition-colors duration-500 text-lg text-center border border-black"
            >
              Post a comment
            </button>
          </form>
        </div>
        <div className="h-[1px] px-4 md:px-32 bg-gray-300 w-[75vw]" />
        <div className="pt-10 pb-10 flex flex-col items-start w-[75vw]">
          <h1 className="font-semibold text-black text-lg">Comments</h1>
          {comments
            .sort((a, b) =>
              a.time.toDate().getTime() > b.time.toDate().getTime() ? -1 : 1
            )
            .map((item) => (
              <div
                key={item.time.seconds}
                className="border rounded p-5 w-full mt-5 flex flex-col"
              >
                <span className="text-lg text-gray-500 font-medium">
                  {item.name} &middot; {item.time.toDate().toDateString()}
                </span>
                <span className="mt-3 text-md text-gray-500 font-bold">
                  {item.content}
                </span>
              </div>
            ))}
          <Button
            link={false}
            mode={false}
            w="mt-10 w-[250px]"
            onClick={getComments}
            text={'Load Comments'}
          />
        </div>
        <div className="h-[1px] px-4 md:px-32 bg-gray-300 w-[75vw]" />
        <div className="pb-10 flex flex-col items-start w-[75vw]">
          <div className="flex flex-col items-start mt-8 space-y-8">
            <h2 className="text-4xl sm:text-6xl text-black">
              Wanna redefine your lifestyle?
            </h2>
            <h2 className="text-4xl sm:text-6xl text-gray-500">Let’s talk!</h2>
            <Button
              link={false}
              mode={false}
              text={'Get in touch'}
              href={'mailto:arianarchitects@gmail.com'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Snippet

export async function getStaticProps({ params }) {
  const { slug } = params
  const page = getPageContentBySlug(slug, [
    'title',
    'image',
    'slug',
    'content',
    'excerpt',
    'date',
  ])
  return {
    props: {
      page: {
        ...page,
        markdown: page.content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllSnippets(['slug'])
  const paths = posts.map(({ slug }) => ({
    params: {
      slug,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
