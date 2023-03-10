import React from 'react'
import { RefreshIcon } from '@heroicons/react/outline'
import TweetBox from './TweetBox'
import { Tweet } from '../Typings'
import TweetComponent from '../components/Tweet'
interface Props{
  tweets:Tweet[]
}

function Feed({tweets}:Props) {
  console.log(tweets)
  return (
    <div className='col-span-7 lg:col-span-5 border-x'>
        <div className='flex items-center justify-between'>
            <h1 className='p-5 text-xl font-bold'>Home</h1>
            <RefreshIcon className='mr-5 mt-5 h-8 w-8 cursor-pointer
             text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125'/>
        </div>

        {/* Tweetbox */}
        <div>
            <TweetBox/>
        </div>
        {tweets.map((tweet)=>(
          <TweetComponent key={tweet._id} tweet={tweet}/>
        ))}
        <div>

        </div>
    </div>
  )
}

export default Feed