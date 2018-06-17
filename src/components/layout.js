import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import AppFooter from '../components/footer'
import Copyright from '../components/copyright'

import '../layouts/styles.sass'

const Layout = ({ children, data }) => (
  <div className="my-site">
    <Helmet
      title="Ok! studio"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />

    <div className="my-site-content">{children}</div>
    <AppFooter />
    <Copyright />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
