import React from 'react'
import { graphql } from 'gatsby'

import { Section, Container } from 'bloomer'

import Layout from '../components/layout'
import PageHero from '../components/pagehero'
import Service from '../components/service'
import CTABanner from '../components/ctabanner'

const ServeisPage = ({ data }) => (
  <Layout>
    <PageHero
      title={
        data.contentfulServicesPage.heroTitle.childMarkdownRemark
          .rawMarkdownBody
      }
      subtitle={data.contentfulServicesPage.heroSubtitle}
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
      content="Vols saber com ho portem a la pràctica?"
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
    contentfulServicesPage {
      heroTitle {
        childMarkdownRemark {
          rawMarkdownBody
          html
        }
      }
      heroSubtitle
    }
  }
`
