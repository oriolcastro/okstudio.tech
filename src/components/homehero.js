import React from 'react'
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
              <Typing
                speed={100}
                cursorClassName="home-hero-cursor"
                loop={true}
              >
                <span>Una web moderna</span>
                <Typing.Backspace count={15} delay={500} speed={50} />
                <Typing.Speed ms={100} />
                <span>La teva aplicació mòbil</span>
                <Typing.Backspace count={23} delay={500} speed={50} />
                <Typing.Speed ms={100} />
                <span>La potencia del núvol</span>
                <Typing.Backspace count={21} delay={500} speed={50} />
                <Typing.Speed ms={100} />
                <span>Millors eines de gestió</span>
                <Typing.Backspace count={23} delay={500} speed={50} />
                <Typing.Speed ms={100} />
                <span>Assesorament personalitzat</span>
              </Typing>
              <span className="invisible-space">.</span>
            </Subtitle>
            <Button isColor="white" isOutlined>
              <Link to="/serveis">
                DESCOBREIX QUE PODEM FER PER TU
                <FAChevronRight
                  height="1.25em"
                  width="1.25em"
                  className="my-icon-container"
                />
              </Link>
            </Button>
          </Container>
        </HeroBody>
      </Hero>
    </div>
  )
}

export default HomeHero
