import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'

import { Section, Container } from 'bloomer'

import PageHero from '../components/pagehero'
import Service from '../components/service'
import CTABanner from '../components/ctabanner'

const ServeisPage = ({ data }) => (
  <Layout>
    <PageHero
      title="Descobriex que podem fer per tu"
      subtitle="Sigui quina sigui la teva necessitat estem aquí per acompanyar-te en el camí"
    />
    <Section>
      <Container>
        {data.allContentfulService.edges.map(({ node }, i) => (
          <Service
            key={node.i}
            title={node.title}
            valueprop={node.valueProp}
            img={node.icon.fluid}
            examples={node.exampleServices}
            exampleBtnLink={node.exampleBtnLink}
            exampleBtnText={node.exampleBtnText}
            serviceColor={node.serviceColor}
          />
        ))}
      </Container>
    </Section>
    <CTABanner
      content="Coneixes com treballem?"
      buttonText="Descobreix el nostre mètode"
      buttonLink="/metode"
    />
  </Layout>
)

export default ServeisPage

export const query = graphql`
  query ServeisPageQuery {
    allContentfulService {
      edges {
        node {
          title
          icon {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyContentfulFluid
            }
          }
          valueProp
          exampleServices
          exampleBtnText
          exampleBtnLink
          serviceColor
        }
      }
    }
  }
`
