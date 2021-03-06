import React from 'react'
import Typing from 'react-typing-animation'
import { Link } from 'gatsby'
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
              <span>Ens mou </span>
              <Typing
                speed={100}
                cursorClassName="homeHero_cursor"
                loop={true}
                className="homeHero_animatedText"
              >
                <span>crear webs modernes</span>
                <Typing.Backspace count={19} delay={500} speed={50} />
                <Typing.Speed ms={100} />
                <span>aprofitar les possibilitats del núvol</span>
                <Typing.Backspace count={38} delay={500} speed={50} />
                <Typing.Speed ms={100} />
                <span>desenvolupar aplicacions web mòbil</span>
                <Typing.Backspace count={34} delay={500} speed={50} />
                <Typing.Speed ms={100} />
                <span>implementar millors eines de gestió</span>
                <Typing.Backspace count={35} delay={500} speed={50} />
                <Typing.Speed ms={100} />
                <span>oferir assessorament personalitzat</span>
                <Typing.Backspace count={34} delay={500} speed={50} />
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
