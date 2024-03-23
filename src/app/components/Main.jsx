import React from 'react'
import { techBlogPosts } from '@/app/blogs/page'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import styles from './main.module.css'
import Subnav from './Subnav';
import Link from 'next/link';

export default function Main() {

    

    const allblogs = techBlogPosts.slice(0, 8).map(blog=> (
        <section key={blog.id} >
            <Link href={`/blogpost/${blog.title.split(' ').join('-')}`} className='flex flex-col gap-2'>
            <img src={`/${blog.image}`} alt="" height={100} width={300} className=''/>
            <cite className='text-purple-900 text-sm'>{blog.date}</cite>
            <p>{blog.subject}</p>
            <p className='text-xs text-gray-500'>{blog.briefText}</p>
            <div className='flex flex-row text-[9px] gap-3'><p className='bg-green-200 text-green-900 rounded-xl p-1'>{blog.categories[0]}</p>  <p className='bg-pink-200 text-pink-900 rounded-xl p-1'>{blog.categories[1]}</p></div>
            
            </Link>


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

    const editorspick = techBlogPosts.slice(15, 18).map(blog =>(
        <section key={blog.id} className='h-60 text-white pl-4 lg:w-[430px] relative rounded-lg' style={ {backgroundImage: `radial-gradient(rgba(15, 7, 7, 0.56), rgba(17, 6, 6, 0.6)), url(/${blog.image})`, backgroundSize: `cover`} }>
            <Link href={`/blogpost/${blog.title.split(' ').join('-')}`}>
            <p className={`text-[9px] font-bold text-center w-32 m-auto p-1 rounded-md uppercase absolute top-2 right-2 ${styles.category} `}>{blog.subject}</p>
            <p className='pt-24 w-[75%] text-sm text-gray-400'>{blog.date}</p>
            <h2 className='w-[85%] pt-3'>{blog.title}</h2>
            <p className='pt-5 text-gray-400 text-xs w-[70%]'>{blog.briefText}</p>
            </Link>



        </section>
    ))

    const shortnote= techBlogPosts.map(blog =>(
        <p>{blog.longText.slice(0, 70)}....</p>
        
    ))
    
    
  return (
    <div>
        <div className={` flex text-white ${styles.main}`}>
            <div className='flex flex-col lg:pt-44 gap-3 place-content-center lg:pl-14 pl-8 lg:w-[60%] w-[90%]'>
            <p className={`text-[11px] font-bold text-center w-28 p-1 rounded-md uppercase ${styles.category} `}>{techBlogPosts[6].subject}</p>
            <h1 className='lg:text-5xl text-2xl'>{techBlogPosts[6].title}</h1>
            <p className='text-gray-400 text-sm'>{techBlogPosts[6].date}</p>
            <em className='text-gray-400 text-lg'>{techBlogPosts[6].briefText}</em>

            </div>

        </div>
        <div className='w-[80%] lg:w-[90%] m-auto mt-5 py-16'>
            <h1 className='text-2xl'>Popular Topics</h1>
            <Subnav />
            
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-9 gap-9 w-[87%] md:w-[100%] m-auto '>{allblogs}</div>
        </div>

        <div className={` flex flex-col items-center place-content-center text-white ${styles.main2}`}>
            <div className='w-[60%] text-center m-auto flex flex-col gap-4'>
            <p className={`lg:text-[11px] font-bold text-center w-32 m-auto p-1 rounded-md uppercase ${styles.category} `}>{techBlogPosts[10].subject}</p>
            <h1 className='lg:text-4xl text-2xl'>{techBlogPosts[10].title}</h1>
            <p className='text-gray-400'>{techBlogPosts[10].date}</p>
            <em>{techBlogPosts[10].briefText}</em>

            </div>


        </div>
        

        <div className='w-[90%] m-auto py-32'>
            <h1 className='text-2xl'>Editors Pick</h1>
            <div className='flex md:flex-row flex-col gap-10 mt-8'>{editorspick}</div>
        </div>

        
        

    </div>
  )
}
