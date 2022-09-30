<div className='inline h-[50px] w-[200px]' >

                          <button onClick={() => setdropdown(! dropdown)}  
                          className="w-[100%] h-[100%]  text-center  bg-[#fedc19] rounded-sm" >All Categories</button>
                          { dropdown ?
                              <div className="absolute z-10 mt-2 w-56  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" >
                              <div className="py-1" >
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" >All Categories</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" >Consoles</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" >Toys</a>
                              </div>
                            </div> : ''
                          }
                       </div>