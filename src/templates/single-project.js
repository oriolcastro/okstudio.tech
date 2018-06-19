import React from 'react'
import Img from 'gatsby-image'

import { Section, Container, Columns, Column, Content, Title } from 'bloomer'

import Layout from '../components/layout'
import SingleHero from '../components/singlehero'
import ClientOpinionBanner from '../components/clientopinionbanner'
import CTABanner from '../components/ctabanner'

const SingleProject = ({ data }) => {
  return (
    <Layout>
      <SingleHero
        img={data.contentfulProject.heroImg.fluid}
        title={data.contentfulProject.title}
        subtitle="Desenvolupament web"
      />

      <Section>
        <Container>
          <Columns>
            <Column isSize="1/3">
              <Img fixed={data.contentfulProject.clientLogo.fixed} />
            </Column>
            <Column>
              <Content>
                <div
                  className="has-text-justified"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.contentfulProject.clientDescription
                        .childMarkdownRemark.html,
                  }}
                />
              </Content>
            </Column>
          </Columns>
          <Title>El Repte</Title>
          <Content>
            <div
              className="has-text-justified"
              dangerouslySetInnerHTML={{
                __html:
                  data.contentfulProject.challengeContent.childMarkdownRemark
                    .html,
              }}
            />
          </Content>
          <Title>La Solució</Title>
          <Content>
            <div
              className="has-text-justified"
              dangerouslySetInnerHTML={{
                __html:
                  data.contentfulProject.solutionContent.childMarkdownRemark
                    .html,
              }}
            />
          </Content>
          <Title>La Tecnologia</Title>
          <Content>
            <div
              className="has-text-justified"
              dangerouslySetInnerHTML={{
                __html:
                  data.contentfulProject.tecnologyContent.childMarkdownRemark
                    .html,
              }}
            />
          </Content>
          <Title>El Resultat</Title>
          <Content>
            <div
              className="has-text-justified"
              dangerouslySetInnerHTML={{
                __html:
                  data.contentfulProject.resultContent.childMarkdownRemark.html,
              }}
            />
          </Content>
        </Container>
      </Section>
      <ClientOpinionBanner
        img={data.contentfulProject.clientLogo.fixed}
        content={data.contentfulProject.clientOpinion.childMarkdownRemark.html}
      />
      <CTABanner
        content="T'agrada la nostra feina?"
        buttonText="Contacta'ns"
        buttonLink="/contacte"
      />
    </Layout>
  )
}

export const query = graphql`
  query ProjectQuery($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      heroImg {
        fluid(maxHeight: 400, maxWidth: 1400) {
          ...GatsbyContentfulFluid
        }
      }
      clientLogo {
        fixed(width: 300, height: 200) {
          ...GatsbyContentfulFixed
        }
      }
      clientDescription {
        childMarkdownRemark {
          html
        }
      }
      challengeContent {
        childMarkdownRemark {
          html
        }
      }
      solutionContent {
        childMarkdownRemark {
          html
        }
      }
      tecnologyContent {
        childMarkdownRemark {
          html
        }
      }
      resultContent {
        childMarkdownRemark {
          html
        }
      }
      clientOpinion {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default SingleProject
