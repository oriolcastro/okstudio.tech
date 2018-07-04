import React from 'react'
import propTypes from 'prop-types'
import Typing from 'react-typing-animation'
import { Link } from 'gatsby'
import FAChevronRight from 'react-icons/lib/fa/chevron-right'
import { Title, Subtitle, Hero, HeroBody, Container, Button } from 'bloomer'

const HomeHero = props => {
  return (
    <div>
      <Hero isColor="primary" isSize="large" className="home-hero">
        <HeroBody>
          <Container>
            <Title isSize="2">{props.title}</Title>
            <Subtitle isSize="3">
              <span>|</span>
              <Typing
                speed={200}
                startDelay={1500}
                loop={true}
                cursorClassName="home-hero-cursor"
              >
                <span>Una web moderna</span>
                <Typing.Backspace count={15} delay={500} speed={200} />
                <span>La teva aplicació mòbil</span>
                <Typing.Backspace count={23} delay={500} speed={100} />
                <span>La potencia del núvol</span>
                <Typing.Backspace count={21} delay={500} speed={50} />
                <span>Millors eines de gestió</span>
                <Typing.Backspace count={23} delay={500} speed={25} />
                <span>Assesorament personalitzat</span>
              </Typing>
              <span>|</span>
            </Subtitle>
            <Link to="/serveis">
              <Button isColor="white" isOutlined>
                DESCOBREIX QUE PODEM FER PER TU
                <FAChevronRight
                  height="1.5em"
                  width="1.5em"
                  className="my-icon-container"
                />
              </Button>
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
