import React, { Component } from 'react'
import Typing from 'react-typing-animation'
import { Link } from 'gatsby'
import FAChevronRight from 'react-icons/lib/fa/chevron-right'
import { Title, Subtitle, Hero, HeroBody, Container, Button } from 'bloomer'

class HomeHero extends Component {
  constructor(props) {
    super(props)
    this.state = { typingFinished: false }
    this.typingFinished = this.typingFinished.bind(this)
  }
  typingFinished = () => {
    this.setState(prevState => ({
      typingFinished: !prevState.typingFinished,
    }))
  }

  render() {
    return (
      <div>
        <Hero isColor="primary" isSize="large" className="home-hero">
          <HeroBody>
            <Container>
              <Title isSize="2">{this.props.title}</Title>
              <Subtitle isSize="3">
                <Typing
                  speed={100}
                  cursorClassName="home-hero-cursor"
                  onFinishedTyping={this.typingFinished}
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
                {this.state.typingFinished && <span>I molt més...</span>}
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
}

export default HomeHero
