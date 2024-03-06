import React from 'react'
import { techBlogPosts } from '@/app/blogs/page'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Main() {

    const allblogs = techBlogPosts.slice(0, 6).map(blog=> (
        <section key={blog.id} className='flex flex-col gap-2'>
            <img src={`/${blog.image}`} alt="" height={100} width={100} className='h-32 w-80'/>
            <cite className='text-purple-900 text-sm'>{blog.date}</cite>
            <p>{blog.subject}</p>
            <p className='text-xs text-gray-500'>{blog.briefText}</p>
            <div className='flex flex-row text-[9px] gap-3'><p className='bg-green-200 text-green-900 rounded-xl p-2'>{blog.categories[0]}</p>  <p className='bg-pink-200 text-pink-900 rounded-xl p-2'>{blog.categories[1]}</p></div>
            


        </section>
    ))

    const recentPosts = techBlogPosts.slice(13, 19).map(blog => (
        <section key={blog.id} className='flex flex-col gap-2'>
            <img src={`/${blog.image}`} alt="" height={100} width={200}  className='h-32 w-80'/>
            <cite className='text-purple-900 text-sm'>{blog.date}</cite>
            <p>{blog.subject}</p>
            <p className='text-xs text-gray-500'>{blog.briefText}</p>
            <div className='flex flex-row text-[9px] gap-3'><p className='bg-green-200 text-green-900 rounded-xl p-2'>{blog.categories[0]}</p>  <p className='bg-pink-200 text-pink-900 rounded-xl p-2'>{blog.categories[1]}</p></div>
        </section>
    ))
    
    
  return (
    <div className='py-8'>
        <h1 className='md:text-9xl text-5xl text-center border-y-2 border-black'><strong>THE BLOG</strong></h1>



     <div className='py-7 w-[80%] m-auto'>

         <h2 className='py-6 text-xl'>Recent blog posts</h2>

          <div className='grid md:grid-cols-3 grid-cols-1 gap-20 py-4 '>
            
            <div>{recentPosts[0]}</div>
          
            <div>{recentPosts[1]}</div>
            <div>{recentPosts[2]}</div>
            <div>{recentPosts[3]}</div>
            <div>{recentPosts[4]}</div>
            <div>{recentPosts[5]}</div>
     </div>
            
            
            

        
     </div>

     <div className='w-[80%] m-auto md:pt-40'>
        <h2 className='py-6 text-xl'>All blog posts</h2>
        <div className='md:grid-cols-3 grid md:grid-rows-3 grid-cols-1 gap-20'>
            {allblogs}

        </div>

     <div className='flex md:flex-row flex-col items-center justify-between py-6'> 
        <div className='flex flex-row gap-2 items-center'><FaLongArrowAltLeft />Previous</div>
        <div className='flex flex-row gap-3'><button>1</button><button>2</button><button>3</button><button>4</button></div>
        <div className='flex flex-row gap-2 items-center'>Next<FaLongArrowAltRight /></div>
     </div>


     </div>


    </div>
  )
}
