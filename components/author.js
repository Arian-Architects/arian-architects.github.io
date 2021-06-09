import { deploymentUrl } from '@/lib/data'

const Author = ({ name, twitter, image }) => {
  return (
    <span className="flex flex-row items-center space-x-2">
      <div className="relative w-[30px] h-[30px] border bg-gray-200 rounded-full">
        <img
          loading="lazy"
          decoding="async"
          alt={`${name} Twitter Image`}
          title={`${name} Twitter Image`}
          src={`${deploymentUrl}/${image}`}
          className="absolute w-[30px] h-[30px] top-0 left-0 rounded-full"
        />
      </div>
      <span className="flex flex-col items-center space-y-0">
        <span className="font-bold">{name}</span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="m-0 p-0 text-blue-500"
          href={`https://twitter.com/${twitter}`}
        >
          @{twitter}
        </a>
      </span>
    </span>
  )
}

export default Author
