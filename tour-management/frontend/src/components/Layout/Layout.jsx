import React from 'react'
import Routers from '../../router/Routers'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = () => {
  return (
    <>
    <Header></Header>
    <Routers></Routers>
    <Footer></Footer></>
  )
}

export default Layout