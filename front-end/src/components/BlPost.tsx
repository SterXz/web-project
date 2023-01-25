import React, { useState } from 'react'
import { IBlPost } from '../models'
import { Image } from 'antd'

interface BlPostProps {
  blPost : IBlPost
}

export default function BlPost({blPost}: BlPostProps) {

  return (
    <div className='border py-2 px-4 flex xs:flex-col sm:flex-col lg:flex-row m-4 bg-white' style={{borderRadius: '10px'}}>
      <div style={{maxWidth: '10rem', minWidth: '10rem'}}>
        <Image
          src={blPost.image}
          rootClassName={''}
          alt={blPost.title}
          style={{borderRadius: '10px'}}
        />
      </div>
      <div className='ml-4'>
        <h1 className='font-bold text-xl text-blue-400'>{blPost.title}</h1>
        <p>{blPost.description}</p>
      </div>

    </div>
  )
}
