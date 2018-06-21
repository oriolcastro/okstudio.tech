import React from 'react'
import Img from 'gatsby-image'
// import { Link } from 'gatsby'

import { Section, Container, Title, Columns, Column, Content } from 'bloomer'

import Layout from '../components/layout'
import PageHero from '../components/pagehero'
import CTABanner from '../components/ctabanner'

const MetodePage = ({ data }) => (
  <Layout>
    <PageHero
      title={data.contentfulMethodPage.heroTitle}
      subtitle={data.contentfulMethodPage.heroSubtitle}
    />
    <Section>
      <Container>
        <Title className="has-text-centered">
          Totes les nostres relacions es basen en 3 principis bàsics
        </Title>

        <Columns isVCentered isCentered>
          <Column>
            <Img
              fluid={data.contentfulMethodPage.principles[0].image.fluid}
              outerWrapperClassName="has-shadow"
            />
          </Column>
          <Column>
            <Content className="principle-text">
              <h4 className="has-text-centered">
                {data.contentfulMethodPage.principles[0].title}
              </h4>
              <p className="has-text-justified">
                {
                  data.contentfulMethodPage.principles[0].content
                    .childMarkdownRemark.rawMarkdownBody
                }
              </p>
            </Content>
          </Column>
        </Columns>
        <Columns isVCentered isCentered>
          <Column>
            <Content className="principle-text">
              <h4 className="has-text-centered">
                {data.contentfulMethodPage.principles[1].title}
              </h4>
              <p className="has-text-justified">
                {
                  data.contentfulMethodPage.principles[1].content
                    .childMarkdownRemark.rawMarkdownBody
                }
              </p>
            </Content>
          </Column>
          <Column>
            <Img
              fluid={data.contentfulMethodPage.principles[1].image.fluid}
              outerWrapperClassName="has-shadow"
            />
          </Column>
        </Columns>
        <Columns isVCentered isCentered>
          <Column>
            <Img
              fluid={data.contentfulMethodPage.principles[2].image.fluid}
              outerWrapperClassName="has-shadow"
            />
          </Column>
          <Column>
            <Content className="principle-text">
              <h4 className="has-text-centered">
                {data.contentfulMethodPage.principles[2].title}
              </h4>
              <p className="has-text-justified">
                {
                  data.contentfulMethodPage.principles[2].content
                    .childMarkdownRemark.rawMarkdownBody
                }
              </p>
            </Content>
          </Column>
        </Columns>
      </Container>
    </Section>
    <CTABanner
      content={data.contentfulMethodPage.banners[0].content}
      buttonText={data.contentfulMethodPage.banners[0].btnText}
      buttonLink={data.contentfulMethodPage.banners[0].btnLink}
    />
  </Layout>
)

export default MetodePage

export const query = graphql`
  query MethodPageQuery {
    contentfulMethodPage {
      heroTitle
      heroSubtitle
      principles {
        title
        image {
          fluid(maxHeight: 400) {
            ...GatsbyContentfulFluid
          }
        }
        content {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
      banners {
        content
        btnText
        btnLink
      }
    }
  }
`
