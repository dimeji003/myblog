import React from 'react'

export default function Subnav() {
  return (
    <div className='md:flex lg:flex-row flex-col justify-between text-xs pt-6 hidden'>
        <ul className='flex lg:flex-row flex-col gap-4'>
            <li>All</li>
            <li>Artificial Intelligence</li>
            <li>Cybersecurity</li>
            <li>Robotics</li>
            <li>Web Development</li>
        </ul>
        <p>See All</p>
    </div>
  )
}
