import SEO from '@/components/seo-head'
import Button from '@/components/button'
import { productionUrl } from '@/lib/data'
import RedefineLifestyle from '@/components/redefine-lifestyle'

const Home = () => {
  return (
    <>
      <SEO cannonical={`${productionUrl}`} />
      <div className="pt-8 flex flex-col items-center text-center space-y-8">
        <h1 className="text-4xl sm:text-6xl text-black">Arian Architects</h1>
        <h2 className="text-4xl sm:text-6xl text-gray-500">
          Redefining your lifestyle.
        </h2>
        <div className="pt-8 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <Button
            href={'mailto:arianarchitects@gmail.com'}
            link={false}
            mode={true}
            text={'Get in touch'}
          />
          <Button
            href={'/projects'}
            link={true}
            mode={false}
            text={'Projects'}
          />
        </div>
      </div>
      <div className="mt-10 py-10 bg-black grid grid-cols-1 lg:grid-cols-2 gap-4">
        <span className="px-12 md:px-24 md:leading-[60px] w-full h-full text-white text-2xl sm:text-4xl md:text-5xl flex flex-col items-center justify-center">
          Building modest and intelligent responses based buildings.
        </span>
        <span className="px-12 md:px-24 w-full h-full text-white text-xl md:text-2xl flex flex-col items-center justify-center">
          A leading architecture studio in Delhi which practices making
          architecture, interiors and furniture focusing on building services,
          appealing aesthetics and client experience. We are committed to the
          process of creating spaces which responds to the users, expanding
          their aura in the form of architecture.
        </span>
      </div>
      <div className="mt-10 flex flex-col items-center space-y-10">
        <span className="text-center font-semibold px-12 md:px-24 md:leading-[60px] w-full h-full text-black text-4xl md:text-5xl flex flex-col items-center justify-center">
          {`Building <workspace> for <requirement>`}
        </span>
        <div className="relative flex flex-col items-center text-center w-[75vw] md:w-[50vw] h-[150px] sm:h-[300px] md:h-[500px]">
          <img
            decoding="async"
            loading="lazy"
            className="fit-cover shadow-lg absolute w-[75vw] md:w-[50vw] h-[150px] sm:h-[300px] md:h-[500px]"
            src="https://cdn.statically.io/gh/Arian-Architects/arian-architects.github.io/gh-pages/Rakesh%20Kohli,%20Inderpuri/1.jpg"
          />
          <div className="bg-gray-300 w-[75vw] md:w-[50vw] h-[150px] sm:h-[300px] md:h-[500px]"></div>
        </div>
        <Button
          href={'/projects'}
          w="w-[250px]"
          link={true}
          mode={true}
          text={'View Projects'}
        />
        <div className="h-[1px] px-4 md:px-32 bg-gray-300 w-[75vw]" />
        <div className="pb-10 flex flex-col items-start w-[75vw]">
          <RedefineLifestyle />
        </div>
      </div>
    </>
  )
}

export default Home
