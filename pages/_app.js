import '@/styles/global.css'
import Link from 'next/link'
import { useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import { Metrics } from '@layer0/rum'
import { deploymentUrl, socialLinks } from '@/lib/data'

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // Measure only on production
    if (process.env.NODE_ENV == 'production') {
      new Metrics({
        token: 'da89674b-c131-4fd9-9795-75c60377525b',
      }).collect()
    }
  }, [])

  return (
    <>
      <div className="font-display flex flex-col">
        <div className="border-b bg-opacity-75 py-2 w-full bg-white flex flex-col items-center">
          <div className="flex flex-row items-center justify-between w-full px-4 md:px-32">
            <Link href="/">
              <a>
                <div className="relative flex flex-row items-center space-x-1">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={`${deploymentUrl}/favicon-image.png`}
                    className="absolute left-1 top-[0.5] w-[22px] h-[22px]"
                  />
                  <div className="w-[25px] h-[25px]"></div>
                  <span className="text-md md:text-xl text-black">
                    Arian Architects
                  </span>
                </div>
              </a>
            </Link>
            <span className="flex flex-row space-x-5">
              <Link href="/projects">
                <a className="text-md md:text-lg text-black">Projects</a>
              </Link>
              <Link href="/blogs">
                <a className="text-md md:text-lg text-black">Blogs</a>
              </Link>
            </span>
          </div>
        </div>
        <Component {...pageProps} />
        <div className="w-full py-10 flex items-center justify-center bg-black">
          <div className="w-[75vw] text-white flex flex-col">
            <div className="w-full text-3xl md:text-7xl font-bold">
              <h1 className="w-full md:w-2/3">Arian Architects</h1>
            </div>
            <div className="flex mt-8 flex-col md:flex-row md:justify-between">
              <p className="w-full md:w-2/3 text-gray-400">
                90 MS Block, Hari Nagar, Clock Tower, opposite to Hotel Maya
                Palace, New Delhi, Delhi 110064
              </p>
            </div>
            <div className="mt-5 flex flex-row space-x-5">
              {socialLinks &&
                socialLinks.map((item, index) => (
                  <a
                    key={index}
                    target="_blank"
                    href={item.href}
                    className={item.class}
                    rel="noopener noreferrer"
                    aria-label={`${item.name} Arian Architects`}
                  >
                    <img
                      width="30px"
                      height="30px"
                      decoding="async"
                      src={`${deploymentUrl}/${item.src}`}
                      alt={`${item.name} Arian Architects`}
                    />
                  </a>
                ))}
            </div>
            <div className="mt-5 flex flex-col space-y-5">
              <a
                className="text-gray-400 text-xl"
                href="mailto:arianarchitects@gmail.com"
              >
                arianarchitects@gmail.com
              </a>
              <a className="text-gray-400 text-xl" href="tel:+91-9999218269">
                +91-9999218269
              </a>
              <a
                className="text-gray-400 text-xl"
                target="_blank"
                rel="noopener noreferrer"
                href={'https://linkedin.com/in/rishi-raj-jain'}
              >
                {`Design & Development`} by{' '}
                <span className="underline">Rishi Raj Jain</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyApp
