import {useState, useEffect} from 'react'
import {IBlPost} from '../models'
import axios, {AxiosError} from 'axios'

export const useBlPosts = () => {
  const [loading, setLoading] = useState(false)
  const [blPosts, setBlPosts] = useState<IBlPost[]>([])
  const [error, setError] = useState('')

  const addBlPost = (blPost: IBlPost) => { 
    setBlPosts(prev => [...prev, blPost])
  }

  async function fetchBlPosts() {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get<IBlPost[]>('http://localhost:8080/blposts')
      setBlPosts(response.data)
      setLoading(false)
    } catch (err: unknown) {
      const error = err as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchBlPosts()
  }, [])

  return {blPosts, error, loading, addBlPost}
}