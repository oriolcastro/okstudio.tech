import React from 'react'
import propTypes from 'prop-types'
import Typing from 'react-typing-animation'
import { Link } from 'gatsby'
import { Title, Subtitle, Hero, HeroBody, Container, Button } from 'bloomer'

const HomeHero = props => {
  return (
    <div>
      <Hero isColor="primary" isSize="large" className="home-hero">
        <HeroBody>
          <Container>
            <Title isSize="2">{props.title}</Title>
            <Subtitle isSize="3">
              <Typing
                speed={150}
                startDelay={1500}
                loop={true}
                cursorClassName="home-hero-cursor"
              >
                <span>Una web moderna</span>
                <Typing.Backspace count={15} delay={500} />
                <span>La teva aplicació mòbil</span>
                <Typing.Backspace count={23} delay={500} />
                <span>Aprofitar les possibilitats del núvol</span>
                <Typing.Backspace count={37} delay={500} />
                <span>Eines per gestionar millor</span>
                <Typing.Backspace count={26} delay={500} />
                <span>Assesorament personalitzat</span>
              </Typing>
            </Subtitle>
            <Link to="/serveis">
              <Button isColor="primary">T'AJUDEM</Button>
            </Link>
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
