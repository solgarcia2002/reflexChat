'use client'
import ChatForm from '../components/chatForm'
import MessageList from '../components/messageList'
import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import type { MessageProps } from '../components/message'
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
    socket.emit('chat message', { userName: 'User', dateTime: new Date().toISOString(), message: newMessage });
    setNewMessage('');
  };


  console.log(messages)
  return <main className="fixed p-0 h-screen w-screen bg-custom-gradient flex flex-col ">
    <h1 className="text-5xl text-center text-white uppercase m-5">Chat with US</h1>
    <div className="flex flex-direction-col">
      <div className='min-w-80'>chat list</div>
      <div className='flex flex-col flex-grow overflow-hidden  h-[91vh]'>
        <MessageList messages={messages} />
        <ChatForm onChangeInput={(e) => setNewMessage( e.currentTarget.value)} onClickButton={sendMessage}/>
      </div>

    </div>
  </main>
}

export default ChatPage