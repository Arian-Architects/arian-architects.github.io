import Link from 'next/link'

const Button = ({
  link = false,
  href,
  text,
  mode = true,
  w = 'w-[150px]',
  onClick = undefined,
}) => {
  const buttonClass = [
    mode
      ? 'bg-black hover:bg-white text-white hover:text-black hover:shadow-2xl'
      : 'bg-white hover:bg-black text-black hover:text-white',
    'py-2 px-5 transition-colors duration-500',
    'text-lg text-center',
    'border border-black',
    w,
  ].join(' ')
  return link ? (
    <Link href={href}>
      <a className={buttonClass}>{text}</a>
    </Link>
  ) : onClick ? (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  ) : (
    <a href={href} className={buttonClass}>
      {text}
    </a>
  )
}

export default Button
