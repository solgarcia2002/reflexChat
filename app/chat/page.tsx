'use client'
import ChatForm from '../components/chatForm'
import MessageList from '../components/messageList'
import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import type { MessageProps } from '../components/message'
import { useSession, signIn, signOut } from "next-auth/react"
import ButtonGradient from '../components/buttonGradient'
const socket = io('http://localhost:3001')

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
  const { data: session } = useSession()
  const user = session?.user?.name
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

  useEffect(() => {
    // Escuchar mensajes entrantes
    socket.on('chat message', (message: MessageProps) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Limpiar el listener al desmontar el componente
    return () => {
      socket.off('chat message');
    };
  }, []);

  const sendMessage = (): void => {
    socket.emit('chat message', { userName: user ?? 'User', dateTime: new Date().toISOString(), message: newMessage });
    setNewMessage('');
  };

  return <main className="fixed p-0 h-screen w-screen bg-custom-gradient flex flex-col ">
    <div className="flex justify-between items-end m-5">
      <h1 className="text-5xl text-center text-white uppercase m-5">Chat with US</h1>
      {session && <button className=" py-2 px-4 rounded flex-1 w-32 " onClick={() => signOut()}>Log Out</button>}
    </div>
    <div className="flex flex-direction-col">
      <div className='min-w-80'>chat list</div>
      <div className='flex flex-col flex-grow overflow-hidden h-[87vh]'>
        {!session && <ButtonGradient onClick={() => signIn('github')} title='Log In' maxWidth="max-w-48"/>}
        <MessageList messages={messages} />
        <ChatForm onChangeInput={(e) => setNewMessage(e.currentTarget.value)} onClickButton={sendMessage} />
      </div>

    </div>
  </main>
}

export default ChatPage