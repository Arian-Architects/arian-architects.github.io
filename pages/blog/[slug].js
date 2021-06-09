import { useState } from 'react'
import SEO from '@/components/seo-head'
import { useRouter } from 'next/router'
import Button from '@/components/button'
import ReactMarkdown from 'react-markdown'
import firebase, { firestore } from '@/lib/firebase'
import { scrollProjects } from '@/components/scroll'
import { getAllSnippets, getPageContentBySlug } from '@/lib/markdown'
import { deploymentUrl, month, productionUrl, weekday } from '@/lib/data'

const Snippet = ({ page }) => {
  const router = new useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const [comments, setComments] = useState([])

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  const writeComment = (e) => {
    e.preventDefault()
    if (
      name.length > 3 &&
      validateEmail(email) &&
      content.length > 3 &&
      content.length < 500
    ) {
      firestore
        .collection('comments')
        .add({
          name: name,
          slug: page.slug,
          content: content,
          time: firebase.firestore.Timestamp.fromDate(new Date()),
        })
        .then(() => {
          setName('')
          setEmail('')
          setContent('')
        })
        .catch((err) => {
          console.error('error adding comment: ', err)
        })
    } else {
      console.log(name, content, email)
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
        <div className="pb-10 flex flex-col items-start w-[75vw]">
          <form onSubmit={writeComment} className="pt-10 flex flex-col w-full">
            <h1 className="font-semibold text-black text-lg">
              Write a comment
            </h1>
            <div className="flex flex-row space-x-5 items-center">
              <input
                className="mt-5 w-1/2 appearance-none transition-colors outline-none ring-0 duration-500 px-5 py-2 border hover:border-black rounded hover:shadow text-black"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
              <input
                className="mt-5 w-1/2 appearance-none transition-colors outline-none ring-0 duration-500 px-5 py-2 border hover:border-black rounded hover:shadow text-black"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <textarea
              className="mt-5 appearance-none transition-colors duration-500 outline-none ring-0 p-5 border hover:border-black rounded hover:shadow text-black"
              placeholder="Maximum of 500 characters."
              onChange={(e) => setContent(e.target.value)}
              value={content}
              required
            />
            <button
              className="w-[250px] appearance-none mt-10 bg-white hover:bg-black text-black hover:text-white py-2 px-5 transition-colors duration-500 text-lg text-center border border-black"
              type="submit"
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
            text={'Load  Comments'}
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
              href={'mailto:arianarchitects@gmail.com'}
              link={false}
              mode={false}
              text={'Get in touch'}
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
