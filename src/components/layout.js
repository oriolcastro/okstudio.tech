import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/header'
import AppFooter from '../components/footer'
import Copyright from '../components/copyright'

import '../styles/main.sass'

import Config from '../../meta/config'

const Layout = ({ children, data }) => (
  <div className="my-site main-layout">
    <Helmet>
      <title>{Config.siteTitle}</title>
      <meta name="description" content={Config.siteDescription} />
      <meta
        name="keywords"
        content="aplicacions web, desenvolupament web, programació web, wordpress, formació, assesorament, noves tecnologies, assesoria tecnològica"
      />
      <meta property="og:locale" content="ca_ES" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={Config.siteDescription} />
      <meta property="og:title" content={Config.siteTitle} />
      <meta property="og:url" content={Config.siteUrl} />
    </Helmet>

    <Header />

    {children}
    <AppFooter />
    <Copyright />
  </div>
)

export default Layout
