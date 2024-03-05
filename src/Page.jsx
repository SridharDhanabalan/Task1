import React from 'react'
import './Page.css'
import './index.css'
import Cart from './Card.jsx'

const Page = () => {
  return (
    <div className='Parent'>
        <h4 className='Toll'>Tollfree No.<br/>18002660301</h4>
        <div className='Pic' >
        <img src="./src/assets/Group.png" alt="Pic" />
        </div>
        <button className='Book'>Book Appointment</button>
        <div>
        <Cart/>
        </div>
    </div>
  )
}

export default Page
