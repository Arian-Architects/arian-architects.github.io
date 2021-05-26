import { items } from '@/lib/data'
import { useRouter } from 'next/router'
import SEO from '@/components/seo-head'
import { scrollProjects } from '@/components/scroll'

const IndividualProj = ({ slug }) => {
  const router = new useRouter()
  const specificProj = items.filter((item) => item.project == slug)[0]

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      {slug && (
        <>
          <SEO slug={slug} title={`${slug} - Arian Architects`} />
          <div className="pt-8 flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl sm:text-6xl text-black">
              {slug.split(',')[0]}
            </h1>
            <h2 className="text-4xl sm:text-6xl text-gray-500">
              {slug.split(',')[1]}
            </h2>
            <svg
              onClick={() => scrollProjects('project')}
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
            <div
              id="project"
              className="mt-10 h-[1px] px-4 md:px-32 bg-gray-200 w-full"
            />
          </div>
          {specificProj && (
            <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {new Array(specificProj.end - 1).fill(0).map((item, index) => (
                <div
                  key={index}
                  className="relative w-full text-center flex flex-col items-center py-5"
                >
                  <div className="rounded bg-gray-200 w-[300px] h-[250px]"></div>
                  <img
                    decoding="async"
                    loading="lazy"
                    className="shadow absolute w-[300px] h-[250px] object-cover"
                    src={`${
                      process.env.NODE_ENV === 'production'
                        ? 'https://cdn.statically.io/gh/Arian-Architects/arian-architects.github.io/gh-pages/'
                        : '/'
                    }${slug}/${index + 1}.jpg`}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  )
}

export async function getStaticPaths() {
  let constPaths = []
  for (let i in items) constPaths.push({ params: { slug: items[i].project } })
  return {
    paths: constPaths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: { slug: params.slug },
    revalidate: 1,
  }
}

export default IndividualProj
