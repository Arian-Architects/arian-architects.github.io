import { useRouter } from 'next/router'
import SEO from '@/components/seo-head'
import Button from '@/components/button'
import ReactMarkdown from 'react-markdown'
import { scrollProjects } from '@/components/scroll'
import { deploymentUrl, month, weekday } from '@/lib/data'
import { getAllSnippets, getPageContentBySlug } from '@/lib/markdown'

const Snippet = ({ page }) => {
  const router = new useRouter()
  return router.isFallback || !page ? (
    <div>Loading...</div>
  ) : (
    <>
      <SEO
        slug={page.slug}
        title={page.title}
        description={page.excerpt}
        image={`${deploymentUrl}/${page.image}`}
      />
      <div className="pt-8 flex flex-col items-center text-center">
        <div className="flex flex-col items-center w-[75vw] space-y-8">
          <h1 className="text-4xl sm:text-6xl text-black">{page.title}</h1>
          <span className="text-gray-700 text-md">{`${
            weekday[new Date(page.date).getDay()]
          }, ${month[new Date(page.date).getMonth()]} ${new Date(
            page.date
          ).getDate()} ${new Date(page.date).getFullYear()}`}</span>
          <span className="flex flex-row items-center space-x-5">
            <div className="relative w-[25px] h-[25px] border bg-gray-200 rounded-full">
              <img
                loading="lazy"
                decoding="async"
                src={`${deploymentUrl}/ishant-jain.jpg`}
                className="absolute top-0 left-0 rounded-full"
              />
            </div>
            <span className="flex flex-col items-center space-y-0">
              <span className="font-bold">Ishant Jain</span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
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
            <div className="relative bg-gray-200 w-full h-[250px]">
              <img
                loading="lazy"
                decoding="async"
                className="rounded object-cover absolute top-0 left-0 w-full h-[250px]"
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
