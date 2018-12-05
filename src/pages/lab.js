import React from 'react'
import { graphql } from 'gatsby'
import { Title, Section, Container } from 'bloomer'
import LandingLayout from '../components/layoutLanding'
import LabHero from '../components/labHero'
import CTABanner from '../components/ctabanner'
import LabProject from '../components/labProject'

import HeroImg from '../img/LabHeroImg.png'

const Lab = ({ data }) => {
  return (
    <LandingLayout>
      <LabHero img={HeroImg} />
      <Section>
        <Container style={{ marginBottom: 48 }}>
          <Title isSize="2">El Repte 6by6</Title>
          <p>
            L'objectiu del repte era dissenyar, programar i llençar un projecte
            diferent cada mes des de desembre del 2018 fins a maig del 2019.
            Podeu trobar més informació del funcionament del repte{' '}
            <a
              href="https://oriolcastro.me/blog/2018-11-05-el-repte-6by6/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              aquí.
            </a>
          </p>
        </Container>
        {data.allContentfulLabProject.edges.map(({ node }, i) => (
          <LabProject key={i} {...node} />
        ))}
      </Section>

      <CTABanner
        content="T'agrada la nostra feina?"
        buttonText="Contacta amb nosaltres"
        buttonLink="/contacte"
      />
    </LandingLayout>
  )
}

export default Lab

export const query = graphql`
  query LabPageQuery {
    allContentfulLabProject {
      edges {
        node {
          title
          ideaPitch {
            childMarkdownRemark {
              html
            }
          }
          moreInfo {
            childMarkdownRemark {
              html
            }
          }
          gallery {
            id
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          projectLink
          projectRepo
        }
      }
    }
  }
`
