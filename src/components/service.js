import React from 'react'
import propTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import { Columns, Column, Title, Button, Content } from 'bloomer'

const Service = props => {
  return (
    <div className="service">
      <Title>{props.title}</Title>
      <Columns>
        <Column
          isSize={{ desktop: '1/4', mobile: '1/2' }}
          isOffset={{ mobile: '1/4' }}
        >
          <Img fluid={props.img} />
        </Column>
        <Column isSize="3/4">
          <div className="add-padding-lat">
            <Content className="has-text-justified">
              <p>{props.valueprop}</p>
            </Content>
          </div>
          <div className="add-padding-lat">
            <Content>
              <ul>{props.examples.map((e, i) => <li key={i}>{e}</li>)}</ul>
            </Content>
          </div>
          <div className="serveis_cta-container">
            <div className="button-wrapper">
              <Link to={props.exampleBtnLink}>
                <Button isColor={props.serviceColor} isOutlined>
                  {props.exampleBtnText}
                </Button>
              </Link>
            </div>
            <div className="button-wrapper">
              <Link to="/contacte">
                <Button isColor={props.serviceColor}>Contacte</Button>
              </Link>
            </div>
          </div>
        </Column>
      </Columns>
    </div>
  )
  // eslint-disable-next-line
  Service.propTypes = {
    title: propTypes.string,
    valueprop: propTypes.string,
    img: propTypes.string,
    examples: propTypes.array,
    exampleBtnLink: propTypes.string,
    exampleBtnText: propTypes.string,
    serviceColor: propTypes.string,
  }
}
export default Service
