import React, {useState} from 'react'
import ErrorMessage from './ErrorMessage'
import {IBlPost} from '../models'
import axios from 'axios'

const blPostData: IBlPost = {
  title: '',
  description: '',
  image: '' 
}

interface CreateBlPostProps {
  onCreate: (blPost: IBlPost) => void
}

export default function CreatePic({onCreate}: CreateBlPostProps) {
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')
  const [descr, setDescr] = useState('')
  const [url, setUrl] = useState('')


  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')

    if (title.trim().length === 0) {
      setError('Please enter valid title')
      return
    }
    blPostData.title = title
    blPostData.image = url
    blPostData.description = descr
    const response = await axios.post<IBlPost>('http://localhost:8080/blposts', blPostData)
  
    onCreate(response.data)
  }


  
  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        className='border py-2 px-4 mb-2 w-full'
        placeholder='Enter post title...'
        value={title}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
      />
      <input
        type='text'
        className='border py-2 px-4 mb-2 w-full'
        placeholder='Enter pic URL...'
        value={url}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUrl(event.target.value)}
      />
      <textarea
        className='border py-2 px-4 mb-2 w-full'
        placeholder='Enter post...'
        value={descr}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setDescr(event.target.value)}
      />
      {error && <ErrorMessage error={error} />}

      <button type='submit' className='ml-2 py-1 px-4 border rounded bg-blue-400 text-white'>Create</button>
    </form>
  )
}
