import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

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
        category={data.contentfulProject.category}
      />

      <Section>
        <Container>
          <Columns isCentered isVCentered>
            <Column isSize="1/4">
              <Img
                outerWrapperClassName="client-logo"
                fluid={data.contentfulProject.clientLogo.fluid}
              />
            </Column>
            <Column>
              <Content>
                <div
                  className="has-text-justified client-description"
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
          <Columns isMultiline>
            {data.contentfulProject.resultImg.map(image => (
              <Column isSize="1/2">
                <Img fluid={image.fluid} />
              </Column>
            ))}
          </Columns>
        </Container>
      </Section>

      {data.contentfulProject.clientOpinion.childMarkdownRemark
        .rawMarkdownBody !== 'empty' && (
        <ClientOpinionBanner
          img={data.contentfulProject.clientLogo.fluid}
          content={
            data.contentfulProject.clientOpinion.childMarkdownRemark.html
          }
        />
      )}

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
      category
      heroImg {
        fluid(maxHeight: 400, maxWidth: 1400) {
          ...GatsbyContentfulFluid
        }
      }
      clientLogo {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyContentfulFluid
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
      resultImg {
        fluid(maxWidth: 1200, maxHeight: 1200) {
          ...GatsbyContentfulFluid
        }
      }
      clientOpinion {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`

export default SingleProject
