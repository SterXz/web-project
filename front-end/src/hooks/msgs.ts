import {useState, useEffect} from 'react'
import {IMsg} from '../models'
import axios, {AxiosError} from 'axios'

export const useMsgs = () => {
  const [loading, setLoading] = useState(false)
  const [msgs, setMsgs] = useState<IMsg[]>([])
  const [error, setError] = useState('')

  const addMsg = (msg: IMsg) => { 
    setMsgs(prev => [...prev, msg])
  }

  async function fetchMsgs() {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get<IMsg[]>('http://localhost:8080/msgs')
      setMsgs(response.data)
      setLoading(false)
    } catch (err: unknown) {
      const error = err as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchMsgs()
  }, [])

  return {msgs, error, loading, addMsg}
}