import React from 'react'
import propTypes from 'prop-types'
import Img from 'gatsby-image'

import { Title, Subtitle } from 'bloomer'

const SingleHero = props => {
  return (
    <div className="single-hero">
      <Img fluid={props.img} />
      <div className="single-hero__text">
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
      </div>
    </div>
  )
}

SingleHero.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  img: propTypes.object,
}
export default SingleHero
