import React from 'react'
import propTypes from 'prop-types'

import { Title, Subtitle, Hero, HeroBody, Container } from 'bloomer'

const PageHero = props => {
  return (
    <div>
      <Hero isColor="primary" isSize="medium" className="page-hero">
        <HeroBody>
          <Container>
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitle}</Subtitle>
          </Container>
        </HeroBody>
      </Hero>
    </div>
  )
}

PageHero.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
}
export default PageHero
