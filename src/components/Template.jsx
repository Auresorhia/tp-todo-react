import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

const Template = () => {
  return (
    <>
        <Header/>
            <section>
                <Outlet/>
            </section>
        <Footer/>
    </>
  )
}

export default Template