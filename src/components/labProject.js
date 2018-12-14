import React from 'react'
import FaExtLink from 'react-icons/lib/fa/external-link'
import FaGithub from 'react-icons/lib/fa/github'

import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Img from 'gatsby-image'
import { Button, Title, Container, Content, Columns, Column } from 'bloomer'

const LabProject = props => (
  <Container style={{ marginBottom: 48 }}>
    <Title isSize="4" hasTextColor="primary">
      {props.title}
    </Title>
    <Columns>
      <Column>
        <Title isSize="5">Idea original</Title>
        <Content
          className="has-text-justified"
          dangerouslySetInnerHTML={{
            __html: props.ideaPitch.childMarkdownRemark.html,
          }}
        />
      </Column>
      <Column>
        <Title isSize="5">Més informació</Title>
        <Content
          className="has-text-justified"
          dangerouslySetInnerHTML={{
            __html: props.moreInfo.childMarkdownRemark.html,
          }}
        />
      </Column>
    </Columns>
    <Columns isVCentered isCentered>
      {props.gallery.map((image, id) => (
        <Column size={1 / 3}>
          <Img fluid={image.fluid} key={id} />
        </Column>
      ))}
    </Columns>
    <div style={{ textAlign: 'center' }}>
      <OutboundLink
        href={props.projectLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button isColor="primary" style={{ marginRight: 28 }}>
          <FaExtLink
            height="1.5em"
            width="1.5em"
            className="my-icon-container"
          />
          Accedeix al projecte
        </Button>
      </OutboundLink>
      <OutboundLink
        href={props.projectRepo}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button isColor="dark">
          <FaGithub
            height="1.5em"
            width="1.5em"
            className="my-icon-container"
          />
          Consulta el codi
        </Button>
      </OutboundLink>
    </div>
  </Container>
)
export default LabProject
