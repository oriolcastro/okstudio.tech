import React from 'react'
import propTypes from 'prop-types'
import Link from 'gatsby-link'

import { Button, Content } from 'bloomer'

const CTABanner = props => {
  return (
    <div className="cta-banner">
      <Link to={props.buttonLink}>
        <Content>
          <h1>{props.content}</h1>
        </Content>
        <div className="cta-button">
          <Button isOutlined isColor="white">
            {props.buttonText}
          </Button>
        </div>
      </Link>
    </div>
  )
  // eslint-disable-next-line
  CTABanner.propTypes = {
    content: propTypes.string,
    buttonText: propTypes.string,
    buttonLink: propTypes.string,
  }
}

export default CTABanner
