import React from 'react'
import Layout from '../components/layout'
import PageHero from '../components/pagehero'
import { Section, Container, Content, Title } from 'bloomer'
const CreditsPage = () => (
  <Layout>
    <PageHero
      title="Credits"
      subtitle="Referències als diferents recursos externs utilitzats en aquesta pàgina"
    />
    <Section>
      <Container>
        <Content>
          <Title>Iconografia</Title>
          <ul>
            <li>
              <a href="https://thenounproject.com/term/growth/1666183/">
                Growth
              </a>{' '}
              by Vectors Market from{' '}
              <a href="https://thenounproject.com/">the Noun Project</a>
            </li>
            <li>
              <a href="https://thenounproject.com/term/user-management/1666145//">
                User Management
              </a>{' '}
              by Vectors Market from{' '}
              <a href="https://thenounproject.com/">the Noun Project</a>
            </li>
            <li>
              <a href="https://thenounproject.com/term/page-optimization/1575892/">
                Page optimization
              </a>{' '}
              by Vectors Market from{' '}
              <a href="https://thenounproject.com/">the Noun Project</a>
            </li>
          </ul>
        </Content>
      </Container>
    </Section>
  </Layout>
)

export default CreditsPage
