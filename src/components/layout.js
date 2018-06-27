import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/header'
import AppFooter from '../components/footer'
import Copyright from '../components/copyright'

import '../styles/main.sass'

const Layout = ({ children, data }) => (
  <div className="my-site has-navbar-fixed-top">
    <Helmet
      title="Ok! studio"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />

    {children}
    <AppFooter />
    <Copyright />
  </div>
)

export default Layout
