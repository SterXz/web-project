import React, { useState } from 'react'
import { IPic } from '../models'
import { Image, Button } from 'antd'

interface PicProps {
  pic : IPic
}

export default function Picture({pic}: PicProps) {
  const [details, setDetails] = useState(false)
//  const btnColor = details ? 'bg-yellow-400' : 'bg-blue-400'
//  const btnClass = ['py-2 px-4 border', btnColor]
  return (
    <div className='border py-2 px-4 flex flex-col items-center m-4 w-1/4 bg-white' style={{borderRadius: '10px'}}>
      <Image
        src={pic.image}
        rootClassName={''}
        alt={pic.title}
        style={{borderRadius: '10px'}}
      />
      <h1 className='font-bold lg:text-4xl text-center md:text-xl text-blue-400'>{pic.title}</h1>
      <Button 
        onClick={() =>  setDetails(prev => !prev)}
        className='mt-2'
      >
        {details ? 'Hide Details' : 'Show Details'}
      </Button>
      {details && <p className='text-center'>{'Category: ' + pic.category.toUpperCase()}</p>}
      {details && <p className='text-center'>{pic.description}</p>}
    </div>
  )
}
