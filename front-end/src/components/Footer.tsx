import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeviantart, faVk, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className='h-[5%] bg-white text-blue-400 bottom-0 z-10 border rounded-t-3xl' style={{marginLeft: '15%', marginRight: '15%'}}>
      <span className='flex justify-between items-center'>
        <img className='m-5' src='https://sun9-71.userapi.com/impg/iPUf7vnfTfIptrTQoa2tXDrisLT4W8wrJs2OuQ/q3E37TIjaJw.jpg?size=96x86&quality=96&sign=c5c96747d1a407bc106bded3c7707162&type=album' alt='nox logo'/>  
        <div className='flex flex-row'>
          <div className='flex flex-col'>
            <div className='m-2'>
              <FontAwesomeIcon icon={faVk} />
              <a href='https://vk.com/nox_auri' className='m-2'>nox_auri</a>
            </div>
            <div className='m-2'> 
              <FontAwesomeIcon icon={faTwitter} />
              <a href='https://vk.com/nox_auri' className='m-2'>auri_nox</a>
            </div>
            <div className='m-2'>
              <FontAwesomeIcon icon={faDeviantart} />
              <a href='https://vk.com/nox_auri' className='m-2'>noxauri</a>
            </div>
          </div>
          <div className='flex flex-col text-right'>
            <Link to='/' className='m-2'>Home</Link>
            <Link to='/blog' className='m-2'>Blog</Link>      
            <Link to='/gallery' className='m-2'>Gallery</Link>
            <Link to='/Commisions' className='m-2'>Commisions</Link>
          </div>
        </div>  
      </span>
    </footer>
  )
}