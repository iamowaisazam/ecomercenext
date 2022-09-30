import React from 'react'



//Components
import Header from './header'
import Topbar from './Topbar'
import Menu from './Menu'
import Footer from './footer'


const Page = ({ children }) => {

  return (<>
                <Topbar/>
                <Header/>
                <Menu/>
                  <div className="content">
                     {children}
                  </div>
                <Footer/>
         </>)


}


export default Page
