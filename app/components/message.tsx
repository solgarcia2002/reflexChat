import Image from "next/image"

export type MessageProps = {
  userName: string,
  dateTime: string,
  message: string,
  isAlignedRight?: boolean,
  avatar?: string,
}

const Message = ({ userName, avatar, dateTime, message, isAlignedRight }: MessageProps) => {
  const alignRight = isAlignedRight ? 'justify-end' : 'justify-start'

const date = new Date(dateTime)
  return <div className="flex flex-col bg-white gap-4">
    <div className={`flex gap-4 ${alignRight}`}>
      <h4 className={`${alignRight}`}>{userName}</h4>
      {avatar && <Image src={avatar} alt={userName} />}
      <p className={`text-gray-500 ${alignRight}`}>{date.toLocaleString('en-US')}</p>
    </div>
    <div className={`flex ${alignRight}`}>
      <span className="
      text-white 
      bg-customCyan 
      px-5 
      py-2
      rounded-full">{message}</span>
    </div>

  </div>
}

export default Message