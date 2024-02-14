import type { MessageProps } from './message'
import Message from './message'

type MessageListProps = {
  messages?: MessageProps[],
}

const MessageList = ({ messages }: MessageListProps) => {
  return <div className='bg-white p-10 gap-8 flex flex-col flex-grow  overflow-y-auto'>
  {(!messages || messages.length === 0) && <p className='text-center'>No messages for this conversation</p>}
  {messages?.map((message) => (
      <Message
        isAlignedRight={message.userName === messages[0].userName }
        userName={message.userName}
        dateTime={message.dateTime}
        message={message.message} />))
  }
  </div>
}

export default MessageList