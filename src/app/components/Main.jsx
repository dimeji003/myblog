import React from 'react'
import { techBlogPosts } from '@/app/blogs/page'

export default function Main() {

    const allblogs = techBlogPosts.slice(0, 5).map(blog=> (
        <section key={blog.id}>
            <img src="" alt="" />
            <p>{blog.date}</p>
            <p>{blog.subject}</p>
            <p>{blog.briefText}</p>
            <div className='flex flex-row text-[9px] gap-3'><p className='bg-green-200 text-green-900 rounded-xl p-2'>{blog.categories[0]}</p>  <p className='bg-pink-200 text-pink-900 rounded-xl p-2'>{blog.categories[1]}</p></div>
            


        </section>
    ))

    const recentPosts = techBlogPosts.slice(13, 19).map(blog => (
        <section key={blog.id} className='flex flex-col gap-2'>
            <img src={`/${blog.image}`} alt="" height={100} width={200}  className='h-32 w-80'/>
            <p className='text-purple-900'>{blog.date}</p>
            <p>{blog.subject}</p>
            <p className='text-xs text-gray-500'>{blog.briefText}</p>
            <div className='flex flex-row text-[9px] gap-3'><p className='bg-green-200 text-green-900 rounded-xl p-2'>{blog.categories[0]}</p>  <p className='bg-pink-200 text-pink-900 rounded-xl p-2'>{blog.categories[1]}</p></div>
        </section>
    ))
    const recentPosts1 = techBlogPosts.slice(16, 19).map(blog => (
        <section key={blog.id} className='flex flex-row gap-3'>
            <div>

            <img src={`/${blog.image}`} alt="" height={100} width={100}  className='h-28 w-60'/>
            </div>
            <div className='flex flex-col gap-1'>

            <p>{blog.date}</p>
            <p>{blog.subject}</p>
            <p className='text-xs'>{blog.briefText}</p>
            <div className='flex flex-row gap-3 text-xs'><p>{blog.categories[0]}</p><p>{blog.categories[1]}</p></div>
            </div>
        </section>
    ))
  return (
    <div>
        <h1 className='md:text-9xl text-5xl text-center border-y-2 border-black'><strong>THE BLOG</strong></h1>



     <div className='py-7 w-[80%] m-auto'>

        <h2>Recent blog posts</h2>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-20 py-4 '>
            
                <div>{recentPosts[0]}</div>
          
                <div>{recentPosts[1]}</div>
                <div>{recentPosts[2]}</div>
                <div>{recentPosts[3]}</div>
                <div>{recentPosts[4]}</div>
                <div>{recentPosts[5]}</div>
            
            
            

        </div>
        
    </div>

    <div>
        <h2>All blog posts</h2>
        <div className='grid-cols-3 grid grid-rows-3'>
            {allblogs}

        </div>
    </div>
    </div>
  )
}
