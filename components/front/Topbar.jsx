import React from 'react'
import Link from 'next/link'


export default function Topbar() {

    return (
        <div className="text-[14px] font-normal bg-[#222] px-3  ">
             <div className="topbar flex  max-w-[1200px] m-auto py-3 ">
                  <div className="hidden lg:block topbar-item w-[600px] ">
                    <span className='px-1' ><span className="text-[#aaa] pr-1" >Email:</span>
                    <span className="text-[#fff]" >support@roadthemes.com</span>
                    </span>
                    <span className="px-3 text-[#777] " >|</span>
                    <span className="text-[#fff]" >Free Shipping for all Order of $99</span>
                  </div>
                  <div className="topbar-item flex-grow text-center lg:text-end">
                    <Link href="/login">
                      <a href="#" className="text-[#fff] px-2 " >My account</a>
                    </Link>
                    <span className="px-2 text-[#777] " >|</span>
                    <a href="#" className="text-[#fff] px-2" >Checkout</a>
                  </div>
              </div>
        </div>  
  )
}
