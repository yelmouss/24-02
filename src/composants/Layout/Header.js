import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-dark text-light p-2 text-center sticky-top'    >Players  
    
    <Link  to={'/'}> Home </Link>
    <Link to={'players'} > Players </Link>

    <a href='players'> Players</a>
     </div>
  )
}
