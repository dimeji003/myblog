import React from 'react'
import { techBlogPosts } from '@/app/blogs/page'
import Image from 'next/image'

export default function Newsletter() {
  const allblogs = techBlogPosts.slice(0, 3).map(blog=> (
    <section key={blog.id} className='flex flex-col gap-2'>
        <Image src={`/${blog.image}`} alt="img" height={100} width={100} className='h-32 w-80'/>
        <cite className='text-purple-900 text-sm'>{blog.date}</cite>
        <p>{blog.subject}</p>
        <p className='text-xs text-gray-500'>{blog.briefText}</p>
        <div className='flex flex-row text-[9px] gap-3'><p className='bg-green-200 text-green-900 rounded-xl p-2'>{blog.categories[0]}</p>  <p className='bg-pink-200 text-pink-900 rounded-xl p-2'>{blog.categories[1]}</p></div>
        


    </section>
))
  return (
    <div>
    <div className='text-center flex flex-col gap-3'>
        <h2 className='text-sm text-purple-800'>Newsletter</h2>
        <h1 className='text-2xl'>Stories and Interviews</h1>
        <p className='text-sm'>Subscribe to learn about new product features, the latest tehnology, solutions and updates.</p>
        <span><input type="text" className='bg-black text-white h-7 rounded-[5px] px-2 text-sm' placeholder='Enter your email' />  <button className='bg-purple-700 rounded-[5px] p-2 text-xs text-white h-7'>subscribe</button></span>





    </div>

        <div className='py-10 w-[85%] m-auto'>
          <h2 className='py-4'>All blog posts</h2>

          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 '>
            {allblogs}
          </div>
        </div>
    </div>
  )
}
