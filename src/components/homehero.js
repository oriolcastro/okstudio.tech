import React from 'react'
import Typing from 'react-typing-animation'
import { Link } from 'gatsby'
import FAChevronRight from 'react-icons/lib/fa/chevron-right'
import FAChevronDown from 'react-icons/lib/fa/chevron-down'
import { Title, Subtitle, Hero, HeroBody, Container, Button } from 'bloomer'

const HomeHero = props => {
  return (
    <div>
      <Hero isColor="primary" isSize="large" className="home-hero">
        <HeroBody>
          <Container>
            <Title isSize="2" className="homeHero-title">
              {props.title}
            </Title>
            <Subtitle isSize="4" className="homeHero-subtitle">
              {/* <Typing
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
                <Typing.Delay ms={1000} />
              </Typing> */}
              <p className="invisible-space">.</p>
              <p className="invisible-space">.</p>
            </Subtitle>
            <Link to={props.heroCTALink}>
              <Button
                isColor="white"
                isOutlined
                className="homeHero-cta-button has-text-weight-bold"
              >
                {props.heroCTAText}
              </Button>
            </Link>
          </Container>
        </HeroBody>
        <p className="has-text-centered add-bottom-margin has-text-primary">
          <FAChevronDown
            className="my-icon-container"
            height="2em"
            width="2em"
          />
        </p>
      </Hero>
    </div>
  )
}

export default HomeHero
