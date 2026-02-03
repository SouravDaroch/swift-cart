import React from 'react'
import { Link } from 'react-router'

const EmptyCart = () => {
  return (
   <div className=' col-span-12 h-87 p-30 flex  flex-col justify-center'>
              <img src="/empty-cart.png" alt="" width={"100px"} className='mx-auto'/>
              <center className='text-gray-700 font-semibold pt-4'>You haven't added anything yet. </center>
              <center className='text-gray-600 '>Let's add some items</center>
             <Link to={"/"} className='mx-auto'>
              <button className='bg-pink-600 mt-3 cursor-pointer min-w-30 p-2 text-sm rounded-sm text-white font-bold mx-auto' >Shop Now</button>
              </Link>
              </div>
             
              
  )
}

export default EmptyCart