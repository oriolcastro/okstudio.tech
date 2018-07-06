import React from 'react'
import { Link } from 'gatsby'
import {
  Section,
  Container,
  Columns,
  Column,
  Button,
  Title,
  Content,
} from 'bloomer'
import Img from 'gatsby-image'

const HomeFeaturedProject = props => {
  return (
    <Section>
      <Container>
        <Columns isVCentered>
          <Column isSize={6} isOffset={1}>
            <Title>{props.title}</Title>
            <Content>
              <div
                className="has-text-justified"
                dangerouslySetInnerHTML={{ __html: props.description }}
              />
              <Link to={props.link}>Coneix el projecte ></Link>
            </Content>
            <Link to="/projectes">
              <Button isColor="primary">Últims projectes</Button>
            </Link>
          </Column>
          <Column isSize={{ desktop: 4, mobile: 12 }} isOffset={{ desktop: 1 }}>
            <Img fluid={props.image} />
          </Column>
        </Columns>
      </Container>
    </Section>
  )
}

export default HomeFeaturedProject
