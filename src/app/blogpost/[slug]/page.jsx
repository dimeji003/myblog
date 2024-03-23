"use client"
import { techBlogPosts} from '@/app/blogs/page'
import React from 'react'
import Image from 'next/image'
import dimeji from './blogpost.module.css'
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";

export default function page(props) {
    const blogInfo = techBlogPosts.find(blog => blog.title.split(' ').join('-') == props.params.slug)
  return (
    <div className='flex flex-col pb-8'>
        <div style={{backgroundImage: `radial-gradient(rgba(15, 7, 7, 0.56), rgba(17, 6, 6, 0.6)), url(/${blogInfo.image}) `, backgroundSize: `cover`}} className='h-[80vh] flex place-content-center '>
            <div className='flex flex-col place-content-center gap-7 items-center lg:w-[45%] w-[90%]'>
              <p className={`font-bold p-2 text-white rounded-md uppercase text-xs ${dimeji.category}`}>{blogInfo.subject}</p>
              <h1 className='text-white text-4xl text-center'>{blogInfo.title}</h1>
              <p className=' text-center text-gray-400'>{blogInfo.briefText}</p>
              <p className='text-white'>By {blogInfo.writer}</p>
           

            </div>
           
            
        </div>
        <div className='py-20  flex flex-row gap-3 lg:ml-10 lg:mr-7 lg:gap-8 ml-3 mr-2'>
            <em className='lg:w-[10%]  text-[8px] lg:text-sm leading-7 lg:leading-9 text-purple-600'>
                {blogInfo.date}
            </em>
            <div className='w-[80%]  '>

            <div className='lg:text-sm text-xs leading-7 lg:leading-9 border-b border-gray-400 pb-14'>
                {blogInfo.longText}
                <div className='flex flex-row gap-5 mt-9'>
                  <p className='bg-green-200 text-green-900 text-[10px] text-center lg:text-xs rounded-xl p-1 px-2 lg:p-2'>{blogInfo.categories[0]}</p><p className='bg-pink-200 text-center text-pink-900 rounded-xl text-[10px] lg:text-xs px-2 p-1 lg:p-2'>{blogInfo.categories[1]}</p>
                </div>

            </div>
            <div className=' py-8 justify-between items-center flex flex-row text-xs lg:text-lg '>
                <div className=' flex flex-row items-center gap-2 lg:gap-6'>
                    <div><Image src={`/${blogInfo.image}`} height={80} width={80} alt={blogInfo.title} className='rounded-[50%] lg:h-20 h-11 w-11' /></div>
                    <div>
                        <p>By {blogInfo.writer}</p>
                        <p className='text-gray-500'>{blogInfo.writeroccupation}</p>

                    </div>
                </div>

                <div className='flex flex-row gap-3 items-center lg:text-xl text-sm text-gray-600'>
                  <FaFacebook />
                  <FaTwitter />
                  <FaYoutube />
                  <FaPinterest />
                </div>

            </div>
        
            </div>

        </div>

        
    </div>
  )
}
