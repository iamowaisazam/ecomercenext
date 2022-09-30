import React from 'react'
import Link from 'next/link'
import { FaFacebookF,FaYoutube,FaInstagram,FaLinkedin,FaRssSquare } from "react-icons/fa";
// import Image from 'next/image';


export default function Footer() {
  return (
       <div className=" font-worksans font-normal px-3 text-[#777]">
            <div className="max-w-[1200px] m-auto " >
                <div className="flex flex-wrap justify-between py-[40px] text-[14px]" >
                    
                    <div className="w-[100%] md:w-[30%] pr-[30px] ">
                        <Link href={'/'} ><a><img width={396} height={84} className='py-5' alt="Picture"   src="/images/logo_sinrato.png" /></a></Link>
                        
                        <p className=''>We are a team of designers and developers that create high quality WordPress, Magento, Prestashop, Opencart themes.</p>
                        <h4 className='py-5 text-[#222] font-bold text-[18px]' >Payment:</h4>
                        <img width={286} alt="Picture" src={`${process.env.NEXT_PUBLIC_ASSET_URL}/images/payment-icon.png`}  className="mb-4"  />       
                    </div>

                    <div className='w-[100%] sm:w-[50%] md:w-[20%]' >
                        <h4 className='text-[#222] text-[18px] font-bold mb-2 ' >Information</h4>
                        <div>
                            <p className='py-1' ><a href="#" className='my-3' >Home page</a></p>
                            <p className='py-1'><a href="#" className='py-1' >Cart</a></p>
                            <p className='py-1'><a href="#" className='py-1' >About Us</a></p>
                            <p className='py-1'><a href="#" className='py-1' >Contact Us</a></p>
                            <p className='py-1'><a href="#" className='py-1' >Wishlist</a></p>
                            <p className='py-1'><a href="#" className='py-1' >Privacy</a></p>
                        </div>
                    </div>

                    <div className='pt-3 w-[100%] sm:w-[50%] md:w-[20%]' >
                        <h4 className='text-[#222] text-[18px] font-bold pb-4'>Contact Us</h4>
                        <div>
                            <p className='pb-2' >
                            <span className='text-[#222]'>Address:</span>
                            <span> 4710-4890 Breckinridge St,Fayetteville, NC 28311</span>
                            </p>
                            <p className='pb-2' >
                            <span className='text-[#222] mb-1'>Email:</span>
                            <span> support@roadthemes.com</span>
                            </p>
                            <p className='pb-2' >
                            <span className='text-[#222]'>Call us:</span>
                            <span className='text-[#222] text-[20px] ' >1-1001-234-5678</span>
                            </p>
                        </div>
                    </div>

                    <div className='pt-3 w-[100%] md:w-[30%]' >
                        <h4 className='text-[#222] font-bold text-[18px]'>Twitter Widget</h4>

                        <div className='flex flex-wrap '>
                            <div className='bg-[black] text-[white] rounded px-3 py-2 m-1' ><FaFacebookF className='inline' size={20} /></div>
                            <div className='bg-[black] text-[white] rounded px-3 py-2 m-1' ><FaYoutube className='inline' size={20} /></div>
                            <div className='bg-[black] text-[white] rounded px-3 py-2 m-1'><FaInstagram className='inline' size={20} /></div>
                            <div className='bg-[black] text-[white] rounded px-3 py-2 m-1'><FaLinkedin className='inline' size={20} /></div>
                            <div className='bg-[black] text-[white] rounded px-3 py-2 m-1'><FaRssSquare className='inline' size={20} /></div>
                        </div>

                    </div>
            </div>

            <div className="copyright text-[14px]"> 
                    <hr />
                    <div className="flex items-center flex-col sm:flex-row justify-center md:justify-between py-5">
                        <div>
                            <p>Copyright © 2019 Roadthemes. All Rights Reserved.</p>
                        </div>
                        <div>
                        <span><a href="#">Frequently Questions</a></span>
                        <span className='px-3' >|</span>
                        <span> <a href="#" >Privacy Policy</a></span>          
                        </div>
                    </div>
            </div>
            </div>
        </div>
  )
}
