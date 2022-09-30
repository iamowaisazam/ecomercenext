import Head from 'next/head'
// import Image from 'next/image'
import {useState} from 'react'
import category from '../utils/category'
import tags from '../utils/tags'

import { VscHeart } from "react-icons/vsc";
import {MdKeyboardArrowRight,MdStarRate} from 'react-icons/md'
import Layout from '../components/front/layout'
import ProductListItem from '../components/front/ProductListItem'

export default function page(){

  return (<>
          <Head>
           <title>Shop</title>
           <meta name="viewport" content="initial-scale=1.0, width=device-width" />
           </Head>
           <Layout>

            <section>
                  <div className="max-w-[1200px] m-auto flex flex-wrap justify-between  font-worksans py-[30px] ">
                    <div className="sidebar w-[300px] text-[#222]">

                        <div className="mb-5 border widget">
                            <h4 className='py-2 font-bold text-center text-[20px]' >Categories</h4>
                            <hr />
                            <div className='p-3 text-[#777] text-[16px]' >
                            {
                              category.map((item,key) => (
                                <p key={key} className="py-1 " >
                                  <a className='block flex justify-between hover:text-[#fedc19] transition ' >
                                     <span>{item.title} </span>  
                                     <span><MdKeyboardArrowRight className='inline' size={20} /></span> 
                                  </a></p> 
                              ))
                            }
                            </div>
                        </div>
                        <div className="mb-5 border widget">
                            <h4 className='py-2 font-bold text-center text-[20px]' >Tags</h4>
                            <hr />
                            <div className='p-3 text-[#777] text-[14px] flex flex-wrap justify-center ' >
                              {
                                tags.map((item,key) => (
                                  <p key={key} className="p-2 m-1 text-[#afafaf] border border-[#ebebeb] 
                                  hover:bg-[#fedc19] transition" >
                                    <a>{item.title}  </a>
                                  </p> 
                                ))
                              } 
                            </div>
                        </div>
                        <div className="mb-5">
                          <img className='w-full' width={255} height={433} src="images/shop-sidebar.jpg" />
                        </div>

                        

                        <div className="border widget">
                            <h4 className='py-2 font-bold text-center text-[20px]' >Categories</h4>
                            <div className='p-3 text-[#777] text-[16px]' >
                                <p><a href="#" className='' >Computer</a></p>
                                <p><a href="#">Console</a></p>
                                <p><a href="#">Game</a></p>
                                <p><a href="#">Smart Phone</a></p>
                            </div>
                        </div>

                    </div>

                    <div className="content w-[850px]">
                         <div><img className='w-full' width={1360} height={263} src="images/shop-banner-1.jpg" />
                         </div>
                         <div className="show-counters flex justify-between items-center py-3 ">
                           <div className="counter text-[14px] text-[#222]">
                             Showing 1–15 of 40 results
                           </div>
                           <div className="filter">
                              <select className='p-2 border text-[#222]' >
                                <option>Default Sort</option>
                                <option>Sort By Popularity</option>
                                <option>Sort By Average Rating</option>
                                <option>Sort By Latest</option>
                                <option>Low To Hight</option>
                              </select>
                           </div>
                         </div>
                          <div className="product-list flex flex-wrap justify-between ">
                            {
                                category.map((item,key) => (
                                  <div key={key} className='w-[270px]' > 
                                   <ProductListItem />
                                  </div>
                                ))
                              } 
                          </div>
                    </div>
                  </div>
            </section>


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