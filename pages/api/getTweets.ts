// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {sanityClient} from '../../sanity'
import { Tweet } from '../../Typings'
import { groq  } from 'next-sanity'

const feedQuery = groq `
*[_type=="tweet"]{
    _id,
      ...
  }
`

type Data = {
  tweets: Tweet[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const tweets: Tweet[] = await sanityClient.fetch(feedQuery)
    console.log(tweets)
  res.status(200).json({ tweets })
}
