import React from 'react'
import { Tweet } from '../Typings'
import TimeAgo from 'react-timeago'
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from '@heroicons/react/outline'

interface Props{
    tweet:Tweet[]
}

function Tweet({tweet}:Props) {
  return (
    <div className='flex flex-col space-x-3 border-y border-gray-100'>
      <div className='flex space-x-3'>
        <img src={tweet.profileImg} className='h-10 w-10 rounded-full object-cover'/>
        <div>
          <div className='flex items-center space-x-1'>
             <p className='mr-1 font-bold'>{tweet.username}</p>
             <TimeAgo 
             className='text-sm text-gray-500'
             date={tweet._createdAt}
             />
          </div>
          <p className='pt-1 '>{tweet.text}</p>

          {tweet.image && <img src={tweet.image} className='m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm'/>}
        </div>
      </div>

      <div className='mt-5 flex justify-between'>
      <div className='flex cursor-pointer items-center text-gray-400'>
        <ChatAlt2Icon className="h-5 w-5"/>
        <p>5</p>
      </div>

      <div className='flex cursor-pointer items-center text-gray-400'> 
        <SwitchHorizontalIcon className="h-5 w-5"/>
      </div>

      <div className='flex cursor-pointer items-center text-gray-400'>
        <HeartIcon className="h-5 w-5"/>
      </div>

      <div className='flex cursor-pointer items-center text-gray-400'>
        <UploadIcon className="h-5 w-5"/>
      </div>
      </div>
    </div>
  )
}

export default Tweet