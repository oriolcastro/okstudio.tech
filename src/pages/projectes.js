import React from 'react'
import Masonry from 'react-masonry-css'

import { Section, Container, Title } from 'bloomer'

import Layout from '../components/layout'
import PageHero from '../components/pagehero'
import CTABanner from '../components/ctabanner'
import ProjectsGridElement from '../components/projectsgridelement'

const ProjectesPage = ({ data }) => {
  return (
    <Layout>
      <PageHero
        title="La nostra feina és la millor presentació"
        subtitle="Per a nosaltres no existeixen projectes petits ni reptes massa ambiciosos"
      />
      <Section>
        <Container>
          <Title isSize="3">
            Dona una ullada als últims projectes fets pels nostres clients
          </Title>
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
                  heroImg={node.heroImg.fluid}
                />
              </div>
            ))}
          </Masonry>
        </Container>
      </Section>
      <CTABanner
        content="T'agrada la nostra feina?"
        buttonText="Contacta amb nosaltres"
        buttonLink="/contacte"
      />
    </Layout>
  )
}

export default ProjectesPage

export const query = graphql`
  query ProjectsPageQuery {
    allContentfulProject {
      edges {
        node {
          title
          category
          slug
          heroImg {
            fluid(maxWidth: 800, maxHeight: 800) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
