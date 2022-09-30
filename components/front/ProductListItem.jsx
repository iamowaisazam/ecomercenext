import React from 'react'

import { VscHeart } from "react-icons/vsc";
import {MdKeyboardArrowRight,MdStarRate} from 'react-icons/md'
// import Image from 'next/image'

export default function ProductListItem() {
  return (
    <div  className=" m-1 product border p-3 hover:border-[#fedc19] transition ">
                                    <div className='relative' >
                                      <img className='w-full' width={400} height={400} src="images/product01-400x400.jpg" />
                                      <span className="absolute left-0 sales">Sale!</span>
                                        <button className=' absolute right-0 p-[10px] font-thin	 rounded-full hover:bg-[#fedc19] bg-[#e9e9e9] text-[#222] transition ' >
                                         <VscHeart className='inline' size={20}  />
                                        </button>
                                    </div>
                                    
                                    <p className='text-[#777] text-[14px] hover:text-[#fedc19] transition' >COMPUTER</p> 
                                      <p className='text-[#222] text-[14px] hover:text-[#fedc19] transition' >Aliquam lobortis est turpis mauris</p>
                                      <div>
                                        <MdStarRate className='inline' size={15} color="#fedc19"  />
                                        <MdStarRate className='inline' size={15} color="#fedc19"   />
                                        <MdStarRate className='inline' size={15} color="#fedc19"  />
                                        <MdStarRate className='inline' size={15} color="#e1e1e1"  />
                                        <MdStarRate className='inline' size={15} color="#e1e1e1"  />
                                      </div>
                                      <p className='text-[#fe4f19] font-bold text-[14px] ' >$100.00</p>
                                     <div className='pt-2 text-center' >
                                       <button className='py-[8px] px-[15px] min-w-[140px] shadow rounded-full bg-[#fedc19] text-[14px]' >Add To Cart</button>
                                      </div>
                                     
                                     </div>
  )
}
