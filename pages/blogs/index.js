import Head from 'next/head'
import {useState} from 'react'
import Layout from '../../components/front/layout'

export default function page(){

  return (<>
          <Head>
           <title>Blogs</title>
           <meta name="viewport" content="initial-scale=1.0, width=device-width" />
           </Head>
          <Layout>
              <div className="news-letter bg-[#F0F0F0] ">
                <div className="max-w-[1200px] m-auto py-[40px] ">
                  <div className="flex flex-wrap text-center md:text-left font-worksans justify-center md:justify-between px-3  ">
                    <div className=" py-2">
                        <p className='text-[#222] text-[23px]' >Sign Up For Newsletters</p>
                        <p className='text-[#777] text-[15px]' >Be the First to Know. Sign up for newsletter today</p>
                    </div>
                    <div className=" py-2 text-[14px] self-center  ">
                        <form className='flex h-[50px] ' >
                          <input type="text" placeholder='Enter Your Email Address' className='rounded px-3 w-full outline-none ' />
                          <button className='bg-[#fedc19] h-full px-[20px] py-[12px] font-bold rounded' >Subscribe</button>
                        </form>
                    </div>
                  </div>
                </div>
              </div>
        </Layout>
    </>)
}