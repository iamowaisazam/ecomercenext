import {useState} from 'react'
import Link from 'next/link'
import { VscHeart } from "react-icons/vsc";
import {MdOutlineShoppingBag,MdKeyboardArrowDown,MdOutlineFormatAlignLeft} from 'react-icons/md'


// import Image from 'next/image'


export default function Header() {

  const [selected_dropdown, set_selected_dropdown] = useState('All Categories');
  const [dropdown, setdropdown] = useState(false);

  return (
    <div className="font-worksans text-[14px] font-normal bg-[#fff] px-[10px] sm:px-[50px]">
             <div className="mainbar flex max-w-[1200px] m-auto py-[30px]">
                  <div className="mainbar-item w-[200px]">
                    <Link href={'/'}><a><img alt="Picture" width={396} height={84} src="/images/logo_sinrato.png" /></a></Link> 
                  </div>
                  <div className="hidden lg:block w-[400px] xl:w-[700px] pl-3">
                    <div className="border border-[#ebebeb] h-[50px] rounded-sm	flex " >
                       <input className="outline-0 grow px-3" placeholder='Search Product..' type="text" />
                       <button className="text-[16px] font-bold text-[#323232] w-[130px] bg-[#fedc19]" >Search </button>
                    </div>
                 </div>

                 <div className="mainbar-item text-end grow ">
                      <div className='' >
                          <span className='hidden sm:inline px-2' >
                            <VscHeart className='inline' size={40}  />
                            <div className='hidden md:inline' >
                                <span className='px-1' >Wishlist</span>
                                <span className='badges' >0</span> 
                            </div>
                          </span>
                          <span className='hidden sm:inline px-2' >
                                <MdOutlineShoppingBag className='inline' size={40} />   
                            <div className='hidden md:inline' >
                                <span className='px-1'  >My Cart</span>
                                <span className='badges' >0</span> 
                            </div>
                          </span>
                          <span className='inline xl:hidden px-2' >
                          <span><MdOutlineFormatAlignLeft className='inline pr-2' size={35}  /> </span> 
                          </span>
                      </div>
                 </div>
            </div>
        </div> 
  )
}
