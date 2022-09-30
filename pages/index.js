import Head from 'next/head'
import {useState} from 'react'
// import Image from 'next/image'

import Layout from '../components/front/layout'

export default function page(){
    console.log(process.env.PATH);

  return (<>
          <Head>
           <title>Home</title>
           <meta name="viewport" content="initial-scale=1.0, width=device-width" />
           </Head>
          <Layout>


            <div className="wrapper max-w-[1280px] m-auto font-worksans ">

              <section>
                <div className="flex items-center pb-2 ">
                  <div><h4 className='text-[26px] pr-5' > <span className='font-bold' >Featured </span> <span>Categories</span></h4></div>
                  <div className='grow' ><hr className='border-[#ebebeb]'  /></div>
                </div>
               
                <div className="flex items-center pt-2 ">
                   <div className='item border w-[300px] px-3'>
                      <div className="flex items-center ">
                          <div className='w-[50%]' >
                                <p className='text-[16px] font-bold ' >Audio  Home Theater</p>
                                <p className='text-[14px] py-2 text-[#a9a9a9] ' >3 Products</p>
                                <p className='text-[14px]' >+ Shop Now</p>
                            </div>
                            <div className='w-[50%]'  >
                              <img className='w-full' width={148} height={148} src={`${process.env.NEXT_PUBLIC_ASSET_URL}/images/category1-img.jpg`} />
                            </div>
                      </div>
                    </div>
                </div>
              </section>
              
           

              
              <section className='py-[20px]' >
                        <img className='w-full' width={1360} height={161} src="/images/home4-banner2-1395x166.jpg" />
              </section>

              <section className='py-[20px]' >
                <div className="flex justify-between items-center">
                    <div>
                        <img className='w-full' width={540} height={200} src="/images/home1-banner1-1.jpg" />
                    </div>
                    <div className='mx-5' >
                        <img className='w-full' width={540} height={200} src="/images/home1-banner1-2.jpg" />
                    </div>
                    <div>
                        <img className='w-full' width={540} height={200} src="/images/home1-banner1-3.jpg" />
                    </div>
                </div>
              </section>

            </div>
            
            
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