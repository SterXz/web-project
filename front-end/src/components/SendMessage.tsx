import React, {useState} from 'react'
import ErrorMessage from './ErrorMessage'
import {IMsg} from '../models'
import axios from 'axios'


const msgData: IMsg = {
  email: '',
  message: '',
}

interface CreateMsgProps {
  onCreate: (msg: IMsg) => void
}

export default function SendMessage({onCreate}: CreateMsgProps) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [msgText, setMsgText] = useState('')


  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')

    if (email.trim().length === 0) {
      setError('Please enter valid email')
      return
    }
    msgData.email = email
    msgData.message = msgText
    const response = await axios.post<IMsg>('http://localhost:8080/msgs', msgData)
  
    onCreate(response.data)
  }


  
  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        className='border py-2 px-4 mb-2 w-full'
        placeholder='Enter your email...'
        value={email}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
      />
      <textarea
        className='border py-2 px-4 mb-2 w-full'
        placeholder='Enter you message'
        value={msgText}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setMsgText(event.target.value)}
      />
      {error && <ErrorMessage error={error} />}

      <button type='submit' className='ml-2 py-1 px-4 border rounded bg-blue-400 text-white'>Create</button>
    </form>
  )
}
