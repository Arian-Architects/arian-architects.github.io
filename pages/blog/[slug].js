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
import RedefineLifestyle from '@/components/redefine-lifestyle'
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
        <div className="flex flex-col items-center w-[90vw] sm:w-[75vw] lg:w-[50vw] space-y-8">
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
        <div className="pb-10 flex flex-col items-start w-[90vw] sm:w-[75vw] lg:w-[50vw]">
          <div className="w-full flex flex-col items-start space-y-8">
            <div className="relative bg-gray-200 w-[90vw] sm:w-[75vw] lg:w-[50vw] h-[250px]">
              <img
                loading="lazy"
                decoding="async"
                alt="Blog Cover Image"
                title="Blog Cover Image"
                className="rounded object-cover absolute top-0 left-0 w-[90vw] sm:w-[75vw] lg:w-[50vw] h-[250px]"
                src={`${deploymentUrl}/${page.image}`}
              />
            </div>
            <article className="prose max-w-none">
              <ReactMarkdown children={page.content} />
            </article>
          </div>
        </div>
        <div className="h-[1px] px-4 md:px-32 bg-gray-300 w-[90vw] sm:w-[75vw] lg:w-[50vw]" />
        <div className="pb-10 flex flex-row items-center justify-between w-[90vw] sm:w-[75vw] lg:w-[50vw]">
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
              <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
            </svg>
            <span className="font-bold">{likes == 0 ? '---' : likes}</span>
          </div>
          <SocialLinks
            className={'mt-10'}
            altText={page.title}
            url={`${productionUrl}/blog/${page.slug}`}
          />
        </div>
        <div className="h-[1px] px-4 md:px-32 bg-gray-300 w-[90vw] sm:w-[75vw] lg:w-[50vw]" />
        <div className="pb-10 flex flex-col items-start w-[90vw] sm:w-[75vw] lg:w-[50vw]">
          <form onSubmit={writeComment} className="pt-10 flex flex-col w-full">
            <h1 className="font-semibold text-black text-lg">
              Write a comment
            </h1>
            <div className="flex flex-col sm:flex-row sm:space-x-5 items-start">
              <input
                required
                value={name}
                placeholder="Name*"
                onChange={(e) => setName(e.target.value)}
                className="mt-5 w-full sm:w-1/2 appearance-none transition-colors outline-none ring-0 duration-500 px-5 py-2 border hover:border-black rounded hover:shadow text-black"
              />
              <div className="mt-5 w-full sm:w-1/2 flex flex-col space-y-1">
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
        <div className="h-[1px] px-4 md:px-32 bg-gray-300 w-[90vw] sm:w-[75vw] lg:w-[50vw]" />
        <div className="pt-10 pb-10 flex flex-col items-start w-[90vw] sm:w-[75vw] lg:w-[50vw]">
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
          <RedefineLifestyle />
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
