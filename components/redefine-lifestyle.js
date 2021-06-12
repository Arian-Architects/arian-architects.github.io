import Button from './button'

const RedefineLifestyle = () => {
  return (
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
  )
}

export default RedefineLifestyle
