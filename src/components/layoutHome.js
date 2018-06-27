import React from 'react'
import Helmet from 'react-helmet'

import HeaderHome from '../components/headerHome'
import AppFooter from '../components/footer'
import Copyright from '../components/copyright'

import '../styles/main.sass'

const LayoutHome = ({ children, data }) => (
  <div className="my-site">
    <Helmet
      title="Ok! studio"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <HeaderHome />

    <div className="home-content">{children}</div>
    <AppFooter />
    <Copyright />
  </div>
)

export default LayoutHome
