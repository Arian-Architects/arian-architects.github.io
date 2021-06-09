import SEO from '@/components/seo-head'
import { useRouter } from 'next/router'
import Button from '@/components/button'
import Author from '@/components/author'
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import { validateEmail } from '@/lib/operations'
import SocialLinks from '@/components/social-links'
import firebase, { firestore } from '@/lib/firebase'
import { getComments } from '@/components/posts/comment'
import { postLike, getLikes } from '@/components/posts/like'
import { getAllSnippets, getPageContentBySlug } from '@/lib/markdown'
import { deploymentUrl, month, productionUrl, weekday } from '@/lib/data'

const Snippet = ({ page }) => {
  const router = new useRouter()
  const [name, setName] = useState('')
  const [likes, setLikes] = useState(0)
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const [comments, setComments] = useState([])

  useEffect(() => {
    getLikes(page.slug, setLikes)
  }, [])

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
          <div className="w-full flex flex-col sm:flex-row items-center justify-between">
            <Author
              name={'Ishant Jain'}
              twitter={'ijainishant'}
              image={'ishant-jain.jpg'}
            />
            <SocialLinks
              className={'mt-8 sm:mt-0'}
              altText={page.title}
              url={`${productionUrl}/blog/${page.slug}`}
            />
          </div>
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
            onClick={() =>
              postLike(page.slug, () => getLikes(page.slug, setLikes))
            }
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
          <SocialLinks
            className={'mt-10'}
            altText={page.title}
            url={`${productionUrl}/blog/${page.slug}`}
          />
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
            text={'Load Comments'}
            onClick={() => getComments(page.slug, setComments)}
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
