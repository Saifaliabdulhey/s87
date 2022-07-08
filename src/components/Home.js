import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home_container">
      <div className="loader"></div>
      <Link to='/landing'><button to='/landing'>View States</button></Link>
    </div>
  )
}

export default Home