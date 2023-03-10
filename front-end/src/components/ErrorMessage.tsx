import React from 'react'

interface ErrorMessageProps {
  error : string
}

export default function ErrorMessage({error}: ErrorMessageProps) {
  return (
    <div><p className='font-bold text-center text-red-600'>{error}</p></div>
  )
}
