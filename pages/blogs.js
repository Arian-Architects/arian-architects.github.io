import SEO from '@/components/seo-head'
import Button from '@/components/button'
import { getAllSnippets } from '@/lib/markdown'
import { scrollProjects } from '@/components/scroll'
import { deploymentUrl, productionUrl } from '@/lib/data'

const Blog = ({ posts }) => {
  return (
    <>
      <SEO cannonical={`${productionUrl}/blogs`} slug={'blogs'} title={'Blogs - Arian Architects'} />
      <div className="pt-8 flex flex-col items-center text-center space-y-8">
        <h1 className="text-4xl sm:text-6xl text-black">Blogs</h1>
        <svg
          onClick={() => scrollProjects('blogs')}
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
      <div
        id="blogs"
        className="mt-10 h-[1px] px-4 md:px-32 bg-gray-200 w-full"
      />
      <div className="flex flex-col items-center w-full">
        <div className="pt-10 pb-10 flex flex-col items-start w-[75vw]">
          <div className="w-full flex flex-col items-start space-y-8">
            {posts.map((item) => (
              <div key={item.title} className="flex flex-col md:flex-row">
                <div className="rounded relative w-full h-[250px] max-w-[250px] bg-gray-200">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={`${deploymentUrl}/${item.image}`}
                    className="rounded object-cover h-[250px] w-[250px] absolute top-0 left-0"
                  />
                </div>
                <div className="py-10 md:py-0 md:px-10 flex flex-col space-y-5">
                  <h1 className="text-xl sm:text-3xl font-semibold text-black">
                    {item.title}
                  </h1>
                  <h3 className="text-md sm:text-xl text-black">
                    {item.excerpt}
                  </h3>
                  <Button
                    href={`/blog/${item.slug}`}
                    link={true}
                    mode={true}
                    text={'Read More'}
                  />
                </div>
              </div>
            ))}
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

export default Blog

export async function getStaticProps() {
  const posts = getAllSnippets(['slug', 'excerpt', 'title', 'date', 'image'])
  return {
    props: { posts },
  }
}
