import SEO from '@/components/seo-head'
import Button from '@/components/button'
import { deploymentUrl, items } from '@/lib/data'
import { scrollProjects } from '@/components/scroll'

const Projects = () => {
  return (
    <>
      <SEO slug={'blogs'} title={'Blogs - Arian Architects'} />
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items &&
          items.map((item) => (
            <div
              key={item.project}
              className="relative border border-gray-100 w-full text-center flex flex-col items-center py-10"
            >
              <div className="bg-gray-200 w-[300px] h-[250px]"></div>
              <img
                decoding="async"
                loading="lazy"
                className="shadow absolute w-[300px] h-[250px] object-cover"
                src={`${deploymentUrl}/${item.project}/1.jpg`}
              />
              <h1 className="w-[300px] mt-5 text-4xl text-black">
                {item.project.split(',')[0]}
              </h1>
              <h2 className="w-[300px] mt-3 mb-8 text-3xl text-gray-500">
                {item.project.split(',')[1]}
              </h2>
              <Button
                link={true}
                mode={false}
                text={'Read More'}
                href={`/blog/${item.slug}`}
              />
            </div>
          ))}
      </div>
    </>
  )
}

export default Projects
