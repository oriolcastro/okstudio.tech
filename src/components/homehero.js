import React from 'react'
import propTypes from 'prop-types'
import Typing from 'react-typing-animation'

import { Title, Subtitle, Hero, HeroBody, Container } from 'bloomer'

const HomeHero = props => {
  return (
    <div>
      <Hero isColor="primary" isSize="large" className="home-hero">
        <HeroBody>
          <Container>
            <Title isSize="2">{props.title}</Title>
            <Subtitle>
              <Typing speed={200} startDelay={2000} loop={true}>
                <span>Webs modernes</span>
                <Typing.Backspace count={13} />
                <span>Aplicacions web</span>
                <Typing.Backspace count={15} />
                <span>Cloud computing</span>
              </Typing>
            </Subtitle>
          </Container>
        </HeroBody>
      </Hero>
    </div>
  )
}

HomeHero.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
}
export default HomeHero
