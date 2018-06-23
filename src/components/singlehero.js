import React from 'react'
import propTypes from 'prop-types'
import Img from 'gatsby-image'

import { Title, Tag } from 'bloomer'

const SingleHero = props => {
  return (
    <div className="single-hero">
      <Img fluid={props.img} outerWrapperClassName="is-hidden-mobile" />
      <div className="single-hero__text">
        <Title>{props.title}</Title>

        {props.category.map((c, i) => (
          <div className="button-wrapper">
            <Tag isColor="white" key={i}>
              {c}{' '}
            </Tag>
          </div>
        ))}
      </div>
    </div>
  )
}

SingleHero.propTypes = {
  title: propTypes.string,
  category: propTypes.array,
  img: propTypes.object,
}
export default SingleHero
