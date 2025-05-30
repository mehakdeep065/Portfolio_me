import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <div className='w-full  mt-10 '>
      <div className='flex  border-y-2 border-gray-500 flex-col  items-center p-10 pl-20 '>
          <h3 className='font-light text-sm p-2'>want to contect me?</h3>
          <h1 className='font-bold text-3xl'>Let's Start</h1>
        </div>
          <div className='flex justify-between mx-5 p-10'>
            <h4 className='text-xl'>mk76269464@gmail.com</h4>
         
           <Link to='/About'><button className='border p-2.5 rounded-2xl  hover:-translate-y-2 duration-200  '>More about me.</button> </Link>
            <p className='text-xl '>+91 9815974905</p>
          </div>
     </div>
    </>
  )
}

export default Footer
