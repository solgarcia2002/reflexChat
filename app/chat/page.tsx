'use client'
import ChatForm from '../components/chatForm'
import MessageList from '../components/messageList'

const mockMessages = [
  {
    userName: 'Sol Garcia',
    dateTime: '04/04/2024 10:15 AM',
    message: 'Hello World'
  },

  {
    userName: 'Rafae nuñez',
    dateTime: '04/04/2024 10:15 AM',
    message: 'Let\'s do this'
  }, {
    userName: 'Sol Garcia',
    dateTime: '04/04/2024 10:15 AM',
    message: 'Hello World'
  },

  {
    userName: 'Rafae nuñez',
    dateTime: '04/04/2024 10:15 AM',
    message: 'Let\'s do this'
  }, {
    userName: 'Sol Garcia',
    dateTime: '04/04/2024 10:15 AM',
    message: 'Hello World'
  },

  {
    userName: 'Rafae nuñez',
    dateTime: '04/04/2024 10:15 AM',
    message: 'Let\'s do this'
  }, {
    userName: 'Sol Garcia',
    dateTime: '04/04/2024 10:15 AM',
    message: 'Hello World'
  },

  {
    userName: 'Rafae nuñez',
    dateTime: '04/04/2024 10:15 AM',
    message: 'Let\'s do this'
  }
  , {
    userName: 'Sol Garcia',
    dateTime: '04/04/2024 10:15 AM',
    message: 'Hello World'
  },

  {
    userName: 'Rafae nuñez',
    dateTime: '04/04/2024 10:15 AM',
    message: 'Let\'s do this'
  }
  
]

const ChatPage = () => {
  return <main className="fixed p-0 h-screen w-screen bg-custom-gradient flex flex-col ">
    <h1 className="text-5xl text-center text-white uppercase m-5">Chat with US</h1>
    <div className="flex flex-direction-col">
      <div className='min-w-80'>chat list</div>
      <div className='flex flex-col flex-grow overflow-hidden  h-[91vh]'>
        <MessageList messages={mockMessages} />
        <ChatForm />
      </div>

    </div>
  </main>
}

export default ChatPage