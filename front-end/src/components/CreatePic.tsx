import React, {useState} from 'react'
import ErrorMessage from './ErrorMessage'
import {IPic} from '../models'
import axios from 'axios'
import {Select, Button} from 'antd'

const picData: IPic = {
  title: '',
  description: '',
  image: '',
  category: '', 
}

interface CreatePicProps {
  onCreate: (pic: IPic) => void
}

export default function CreatePic({onCreate}: CreatePicProps) {
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')
  const [descr, setDescr] = useState('')
  const [url, setUrl] = useState('')

  const onChange = (value: string) => {
    picData.category = value
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')

    if (title.trim().length === 0) {
      setError('Please enter valid title')
      return
    }
    picData.title = title
    picData.image = url
    picData.description = descr
    const response = await axios.post<IPic>('http://localhost:8080/pics', picData)
  
    onCreate(response.data)
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        className='border py-2 px-4 mb-2 w-full'
        placeholder='Enter pic title...'
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
      <input
        type='text'
        className='border py-2 px-4 mb-2 w-full'
        placeholder='Enter pic description...'
        value={descr}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDescr(event.target.value)}
      />
        <Select
        showSearch
        placeholder="Select a category"
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={[
          {
            value: 'oc',
            label: 'OC',
          },
          {
            value: 'adopt',
            label: 'Adopt',
          },
          {
            value: 'commision',
            label: 'Commision',
          },
        ]}
      />
      {error && <ErrorMessage error={error} />}

      <button type='submit' className='ml-2 py-1 px-4 border rounded bg-blue-400 text-white'>Create</button>
    </form>
  )
}
