import React from 'react'
import LayoutHome from '../components/layoutHome'
import { graphql } from 'gatsby'
import HomeHero from '../components/homehero'
import HomeFeaturedProject from '../components/homeFeaturedProject'
import CTABanner from '../components/ctabanner'
import HomeContactForm from '../components/homeContactForm'

const IndexPage = ({ data }) => (
  <LayoutHome>
    <HomeHero
      title={data.contentfulHomePage.heroTitle}
      heroCTAText={data.contentfulHomePage.heroCTAText}
      heroCTALink={data.contentfulHomePage.heroCTALink}
    />
    <HomeFeaturedProject
      title={data.contentfulHomePage.featuredProjectTitle}
      description={
        data.contentfulHomePage.featuredProjectDescription.childMarkdownRemark
          .rawMarkdownBody
      }
      link={data.contentfulHomePage.featuredProjectLink}
      image={data.contentfulHomePage.featuredProjectImage.fluid}
    />
    <CTABanner
      content={data.contentfulHomePage.homeBanner.content}
      buttonLink={data.contentfulHomePage.homeBanner.btnLink}
      buttonText={data.contentfulHomePage.homeBanner.btnText}
    />
    <HomeContactForm
      privacyInfo={
        data.contentfulContactPage.privacyInfo.childMarkdownRemark
          .rawMarkdownBody
      }
    />
  </LayoutHome>
)

export default IndexPage

export const query = graphql`
  query HomePageQuery {
    contentfulHomePage {
      heroTitle
      heroCTAText
      heroCTALink
      featuredProjectTitle
      featuredProjectDescription {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      featuredProjectLink
      featuredProjectImage {
        fluid(maxWidth: 800, maxHeight: 1600) {
          ...GatsbyContentfulFluid
        }
      }
      homeBanner {
        content
        btnText
        btnLink
      }
    }
    contentfulContactPage {
      privacyInfo {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
    }
  }
`
