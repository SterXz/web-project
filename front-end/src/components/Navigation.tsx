import React from 'react'
import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className='h-[5%] bg-white text-blue-400 sticky top-0 z-10 rounded-b-3xl border' style={{marginLeft: '15%', marginRight: '15%'}}>
      <span className='flex justify-center items-center'>
        <Link to='/' className='m-2'>Home</Link>
        <Link to='/blog' className='m-2'>Blog</Link>      
        <img src='https://sun9-71.userapi.com/impg/iPUf7vnfTfIptrTQoa2tXDrisLT4W8wrJs2OuQ/q3E37TIjaJw.jpg?size=96x86&quality=96&sign=c5c96747d1a407bc106bded3c7707162&type=album' alt='nox logo'/>  
        <Link to='/gallery' className='m-2'>Gallery</Link>
        <Link to='/commisions' className='m-2'>Commisions</Link>
      </span>
    </nav>
  )
}
