import React from 'react'
import { Fragment } from 'react'
import '@/styles/global.css'
import WebLayout from '@/layout/WebLayout'
// import "antd/dist/reset.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AosProvider from "@/components/AnimationProvider/AnimationProvider"


const App = ({Component,pageProps}) => {
  return (
    <Fragment>
      <AosProvider>
        <WebLayout>
          <Component {...pageProps} />
        </WebLayout>
      </AosProvider>
    </Fragment>
  );
}

export default App