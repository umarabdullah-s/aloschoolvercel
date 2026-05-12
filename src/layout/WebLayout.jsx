import React from 'react'
import { Fragment } from 'react'
import Header from './utils/Header'
import Footer from './utils/Footer'

const WebLayout = ({children}) => {
  return (
    <Fragment>
        <Header />
        {children}
        <Footer />
    </Fragment>
  )
}

export default WebLayout