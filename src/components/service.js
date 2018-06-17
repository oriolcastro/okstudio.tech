import React from 'react'
import propTypes from 'prop-types'

import Link from 'gatsby-link'

import { Container, Columns, Column, Title, Button, Content } from 'bloomer'

const Service = props => {
  return (
    <div className="service">
      <Title>{props.title}</Title>
      <Columns>
        <Column isSize="1/3">
          <img alt="" src={props.img} />
        </Column>
        <Column>
          <Container>
            <Column isSize="1/2" className="column-no-padding">
              <Content>
                <h4>{props.valueprop}</h4>
              </Content>
            </Column>
            <Column className="column-no-padding">
              <Content>
                <ul>
                  <li>First example</li>
                  <li>Second example</li>
                </ul>
              </Content>
            </Column>
            <Column>
              <div className="button-wrapper">
                <Link to={props.CTAexamplelink}>
                  <Button isColor="primary" isOutlined>
                    CTA examples
                  </Button>
                </Link>
              </div>
              <div className="button-wrapper">
                <Link to="/contacte">
                  <Button isColor="primary">CTA contact</Button>
                </Link>
              </div>
            </Column>
          </Container>
        </Column>
      </Columns>
    </div>
  )
  // eslint-disable-next-line
  Service.propTypes = {
    title: propTypes.string,
    valueprop: propTypes.string,
    img: propTypes.string,
    examples: propTypes.string,
    CTAexamplelink: propTypes.string,
  }
}
export default Service
