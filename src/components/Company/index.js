import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Company = () => {
  return (
    <div className='details'>
          <nav>
              <Link to='/'>
                  <button className='profile'>Back</button>
              </Link>
          </nav>
          
          <h3><span>Company:</span>Geeksynergy Technologies Pvt Ltd</h3>
          <p><span>Address:</span>Sanjayanagar, Bengaluru-56</p>
          <p><span>Phone Number:</span> XXXXXXXXX09</p>
          <p><span>Email:</span> XXXXXX@gmail.com</p>
    </div>
  )
}

export default Company