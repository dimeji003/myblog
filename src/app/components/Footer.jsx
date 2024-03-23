import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='bg-gray-900 p-6 py-32'>
      <div className='flex lg:flex-row flex-col w-[80%] m-auto lg:justify-between gap-12 lg:text-xl lg:text-white'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-white'>Contact the Publisher</h1>
          <p className='text-sm text-gray-400'>oladimejilawal14@gmail.com</p>
          <p className='text-sm text-gray-400'>08163901595</p>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-white'>Explorate</h1>
          <p className='text-sm text-gray-400'> Advertise</p>
          <p className='text-sm text-gray-400'>Membership</p>
          <p className='text-sm text-gray-400'>About</p>
          <p className='text-sm text-gray-400'>Partners</p>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-white'>Headquarter</h1>
          <p className='text-sm text-gray-400'>7 oreta road, Igbogbo.</p>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-white'>Connections</h1>
          <div className='flex flex-row gap-3 text-sm'>
          <FaFacebook />
            <FaTwitter />
            <FaYoutube />
            <FaPinterest />
          </div>
        </div>
      </div>
        
    </div>
  )
}
