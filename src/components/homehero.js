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
              <span>Ens mou...</span>
              <Typing
                speed={100}
                cursorClassName="home-hero-cursor"
                loop={true}
              >
                <span>Crear webs modernes</span>
                <Typing.Backspace count={19} delay={500} speed={50} />
                <Typing.Speed ms={100} />
                <span>Aprofitar les possibilitats del núvol</span>
                <Typing.Backspace count={38} delay={500} speed={50} />
                <Typing.Speed ms={100} />
                <span>Desenvolupar aplicacions web mòbil</span>
                <Typing.Backspace count={34} delay={500} speed={50} />
                <Typing.Speed ms={100} />
                <span>Oferir millors eines de gestió</span>
                <Typing.Backspace count={30} delay={500} speed={50} />
                <Typing.Speed ms={100} />
                <span>Assessorar sobre la seva implementació</span>
                <Typing.Backspace count={38} delay={500} speed={50} />
                <Typing.Delay ms={1000} />
              </Typing>
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
