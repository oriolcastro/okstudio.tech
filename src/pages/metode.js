import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import {
  Section,
  Container,
  Title,
  Columns,
  Column,
  Content,
  Box,
} from 'bloomer'

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
          <Column isHidden={['desktop', 'tablet']}>
            <Img
              fluid={data.contentfulMethodPage.principles[1].image.fluid}
              outerWrapperClassName="image-has-shadow principle-image"
            />
          </Column>
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
          <Column isHidden="mobile">
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
      content={data.contentfulMethodPage.banners[1].content}
      buttonText={data.contentfulMethodPage.banners[1].btnText}
      buttonLink={data.contentfulMethodPage.banners[1].btnLink}
      backgroundColor="success"
    />
    <Section className="has-background-primar">
      <Container>
        <Title className="has-text-centered">
          {' '}
          Tots els projectes segueixen un procés de 4 fases
        </Title>
        <Columns isCentered>
          <Column isSize={{ desktop: '1/2', mobile: 'full' }}>
            <Img fluid={data.contentfulMethodPage.process.fluid} />
          </Column>
        </Columns>

        <Columns isCentered>
          <Column isSize="1/4">
            <Box className="is-full-height">
              <Content>
                <div className="has-text-centered is-size-1 has-text-white has-background-danger add-bottom-margin">
                  1
                </div>
                <h4>Estudi</h4>
                <p className="has-text-justified">
                  Comprendre les necessitats de l'organització amb qui estem
                  treballant, les seves dinàmiques i el problema plantejat.
                  Cercar les diferents solucions tecnològiques existents.
                </p>
              </Content>
            </Box>
          </Column>
          <Column isSize="1/4">
            <Box className="is-full-height">
              <Content>
                <div className="has-text-centered is-size-1 has-text-white  has-background-warning add-bottom-margin">
                  2
                </div>
                <h4>Disseny</h4>
                <p className="has-text-justified">
                  Crear la primera proposta i definir les accions de manera
                  compartida. Acordar els objectius del primer cicle
                  d'implementació del projecte i el calendari de treball.
                </p>
              </Content>
            </Box>
          </Column>
          <Column isSize="1/4">
            <Box className="is-full-height">
              <Content>
                <div className="has-text-centered is-size-1 has-text-white has-background-info add-bottom-margin">
                  3
                </div>
                <h4>Desenvolupament</h4>
                <p className="has-text-justified">
                  Desenvolupar les accions del primer cicle. Revisar i validar
                  la feina realitzada per tal de decidir com ha de continuar el
                  projecte en el nou cicle.
                </p>
              </Content>
            </Box>
          </Column>
          <Column isSize="1/4">
            <Box className="is-full-height">
              <Content>
                <div className="has-text-centered is-size-1 has-text-white has-background-success add-bottom-margin">
                  4
                </div>
                <h4>Entrega</h4>
                <p className="has-text-justified">
                  Presentar els resultats finals del projecte als grups
                  d'interès i fer-ne entrega acompanyant la seva posada en marxa
                  durant el temps acordat. Tancar el projecte amb una valoració
                  final.
                </p>
              </Content>
            </Box>
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
      process {
        fluid(maxHeight: 320, maxWidth: 640) {
          ...GatsbyContentfulFluid
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
