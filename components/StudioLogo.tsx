import Image from 'next/image'

const StudioLogo = (props: any) => {
  const { renderDefault, title } = props

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        src="https://links.papareact.com/1m8"
        width={50}
        height={50}
        alt="Logo"
      />
      <>{renderDefault(props)}</>
    </div>
  )
}

export default StudioLogo
