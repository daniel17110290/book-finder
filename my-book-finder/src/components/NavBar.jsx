import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <br/>
      <Link to='/create'>Create</Link>
    </div>
  )
}
