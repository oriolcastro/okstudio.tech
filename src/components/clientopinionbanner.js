import React from 'react'
import propTypes from 'prop-types'
import Img from 'gatsby-image'

import { Section, Container, Columns, Column, Title, Content } from 'bloomer'

const ClientOpinionBanner = props => {
  return (
    <Section className="client-opinion-banner">
      <Container>
        <Columns>
          <Column isSize="1/4">
            <Img outerWrapperClassName="client-logo" fluid={props.img} />
          </Column>
          <Column>
            <Title>L'opinió del client</Title>
            <Content>
              <div
                className="has-text-justified"
                dangerouslySetInnerHTML={{ __html: props.content }}
              />
            </Content>
          </Column>
        </Columns>
      </Container>
    </Section>
  )
}

ClientOpinionBanner.propTypes = {
  img: propTypes.object,
  content: propTypes.string,
}
export default ClientOpinionBanner
