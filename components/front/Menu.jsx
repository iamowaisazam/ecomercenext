import {useState} from 'react'
import {MdKeyboardArrowDown,MdOutlineFormatAlignLeft} from 'react-icons/md'
import {GiRotaryPhone} from 'react-icons/gi'
import Link from 'next/link'

export default function Menu() {

  const [selected_dropdown, set_selected_dropdown] = useState('All Categories');
  const [dropdown, setdropdown] = useState(false);

  const [nested_menu, set_nested_menu] = useState(false);

  return (
    <div className="hidden xl:block font-worksans font-normal bg-[#fedc19] px-3">
        <div className="flex h-[50px] max-w-[1200px] m-auto">
            <div className=" w-[300px]">
                   <div className='inline '>
                       <button onClick={() => setdropdown(! dropdown)}  
                       className="w-[100%] h-[100%] text-left pl-3 text-[#fff] bg-[#222] rounded-sm" >
                         <span><MdOutlineFormatAlignLeft className='inline pr-2' size={35}  /> </span> 
                         <span className='font-bold pr-5' >  Browse Categories </span>
                         <span><MdKeyboardArrowDown className='inline' size={20} /></span>
                       </button>
                       { dropdown ?
                           <div className="absolute z-10 mt-2 w-56  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" >
                           <div className="py-1" >
                                 <a onClick={() => {
                                   set_selected_dropdown('All Categories')
                                   setdropdown(false)
                                   }} className="text-gray-700 block px-4 py-2 text-sm" >All Categories</a>
                                 <a onClick={() => {
                                   set_selected_dropdown('Consoles')
                                   setdropdown(false)
                                   }} className="text-gray-700 block px-4 py-2 text-sm" >Consoles</a>
                                 <a onClick={() => { 
                                   set_selected_dropdown('Toys')
                                   setdropdown(false)
                                   }} className="text-gray-700 block px-4 py-2 text-sm" >Toys</a>
                           </div>
                         </div> : ''
                       }
                 </div>        
             </div>
             <div className=" grow">
                <div className="menu h-full flex flex-row items-center pl-3  text-[#222]">
                   <div className="item">
                     <Link href="/" ><a><span className='px-3'>Home</span></a></Link>
                   </div>
                   <div className="item">
                      <Link href="/about" ><a><span className='px-3'>About</span></a></Link>
                   </div>
                   <div className="item">
                      <Link href="/shop" ><a><span className='px-3'>Shop</span></a></Link>
                   </div>
                   <div className="item">
                       <Link href="/contact" ><a><span className='px-3'>Contact</span></a></Link>
                   </div>
                   <div className="item">
                      <Link href="/blogs" ><a><span className='px-3'>Blog</span></a></Link>
                   </div>
                   
                </div>
             </div>
             <div className=" w-[300px] flex items-center justify-end">
               <span><GiRotaryPhone size={30} className="inline"  /></span>
               <span className='px-2 font-bold text-[14px]' >Hotline: 1-001-234-5678</span>
             </div>
       </div>
     </div>
  )
}

