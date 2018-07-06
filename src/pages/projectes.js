import React from 'react'
import Masonry from 'react-masonry-css'
import { graphql } from 'gatsby'

import { Section, Container } from 'bloomer'

import Layout from '../components/layout'
import PageHero from '../components/pagehero'
import CTABanner from '../components/ctabanner'
import ProjectsGridElement from '../components/projectsgridelement'

const ProjectesPage = ({ data }) => {
  return (
    <Layout>
      <PageHero
        title={
          data.contentfulProjectsPage.heroTitle.childMarkdownRemark
            .rawMarkdownBody
        }
        subtitle={data.contentfulProjectsPage.heroSubtitle}
      />
      <Section>
        <Container>
          <Masonry
            breakpointCols={{ default: 3, 1023: 2, 767: 1 }}
            className="projects-grid"
            columnClassName="projects-grid_column"
          >
            {data.allContentfulProject.edges.map(({ node }, i) => (
              <div key={node.i}>
                <ProjectsGridElement
                  slug={node.slug}
                  title={node.title}
                  category={node.category}
                  masonryImg={node.masonryImg.fluid}
                />
              </div>
            ))}
          </Masonry>
        </Container>
      </Section>
      <CTABanner
        content={data.contentfulProjectsPage.banners[0].content}
        buttonText={data.contentfulProjectsPage.banners[0].btnText}
        buttonLink={data.contentfulProjectsPage.banners[0].btnLink}
      />
    </Layout>
  )
}

export default ProjectesPage

export const query = graphql`
  query ProjectsPageQuery {
    allContentfulProject(sort: { order: DESC, fields: [createdAt] }) {
      edges {
        node {
          title
          category
          slug
          masonryImg {
            fluid(maxWidth: 600, maxHeight: 600) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    contentfulProjectsPage {
      heroTitle {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      heroSubtitle
      banners {
        content
        btnText
        btnLink
      }
    }
  }
`
