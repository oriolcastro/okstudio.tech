import React from 'react'
import { Link } from 'gatsby'

import { Section, Container, Title } from 'bloomer'

import Layout from '../components/layout'
import PageHero from '../components/pagehero'

const NotFoundPage = () => (
  <Layout>
    <PageHero
      title="Ops..."
      subtitle="Alguna cosa ha anat malament. Aquesta pàgina no existeix."
    />
    <Section>
      <Container>
        <Title className="has-text-centered">
          <Link to="/">Torna a la pàgina principal</Link>{' '}
        </Title>
      </Container>
    </Section>
  </Layout>
)

export default NotFoundPage
