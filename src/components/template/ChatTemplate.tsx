import React from 'react'
import HomeHeader from '../organism/HomeHeader'
import ChatList from '../organism/chat/ChatList'
import HomeFooter from '../organism/HomeFooter'

function ChatTemplate() {
  return (
    <>
     <HomeHeader title="채팅" isBorder={true}/>
     <ChatList/>
     <HomeFooter/>
    </>
  )
}

export default ChatTemplate