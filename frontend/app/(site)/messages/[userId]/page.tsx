'use client'
import MessageInput from '@/components/MessageInput'
import { convo } from '@/constant/message'
import React from 'react'

const MessagePage = () => {
  return (
    <div className="flex-1 border-l-[4px] border-main-bg relative ">
    <div className="px-3 py-2 w-full sticky top-0 border-b-[1px] border-main-bg bg-sidebar-bg">
      <h3 className="text-white font-bold text-lg font-sans">Names</h3>
    </div>
    {/* message would implement infinite scrolling for previous and current chat */}
    <div className="messasges flex flex-col gap-4 mt-[1rem] px-2  overflow-auto message-scroll h-[70%]">
      {convo.map((item, i) => (
        <div
          key={i}
          className={`${
            item.type == "sender"
              ? "self-start rounded-bl-none bg-main-message"
              : "self-end rounded-br-none bg-main-blue "
          } text-white max-w-[60%] text-wrap rounded-2xl px-5  py-2`}
        >
          <p>{item.content}</p>
        </div>
      ))}
    </div>

    {/* input tag */}
    <div className='px-2 '>
      <MessageInput />
    </div>
  </div>
  )
}

export default MessagePage
