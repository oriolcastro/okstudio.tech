import React from 'react'
// import { Link } from 'gatsby'

import { Section, Container, Title } from 'bloomer'

import Layout from '../components/layout'
import PageHero from '../components/pagehero'
import ProjectsGrid from '../components/projectsgrid'
import CTABanner from '../components/ctabanner'

const ProjectesPage = () => {
  return (
    <Layout>
      <PageHero
        title="adipiscing commodo"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
      />
      <Section>
        <Container>
          <Title isSize>Dona una ullada a les últimes feines que hem fet</Title>
          <ProjectsGrid />
        </Container>
      </Section>
      <CTABanner
        content="T'agrada la nostra feina?"
        buttonText="Contacta'ns"
        buttonLink="/contacte"
      />
    </Layout>
  )
}

export default ProjectesPage
