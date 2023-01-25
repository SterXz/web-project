import {useState, useEffect} from 'react'
import {IPic} from '../models'
import axios, {AxiosError} from 'axios'

export const usePics = () => {
  const [loading, setLoading] = useState(false)
  const [pics, setPics] = useState<IPic[]>([])
  const [error, setError] = useState('')

  const addPic = (pic: IPic) => { 
    setPics(prev => [...prev, pic])
  }

  async function fetchPics() {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get<IPic[]>('http://localhost:8080/pics')
      setPics(response.data)
      setLoading(false)
    } catch (err: unknown) {
      const error = err as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchPics()
  }, [])

  return {pics, error, loading, addPic}
}