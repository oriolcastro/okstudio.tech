import React from 'react'
import { Link } from 'gatsby'

import { Section, Container, Title } from 'bloomer'

import Layout from '../components/layout'
import PageHero from '../components/pagehero'

const SuccessPage = () => (
  <Layout>
    <PageHero
      title="Moltes gràcies!"
      subtitle="Hem rebut el teu formulari, en uns dies ens posarem en contacte amb tu"
    />
    <Section>
      <Container>
        <Title className="has-text-centered">
          <Link to="/">Continua navegant per la pàgina</Link>{' '}
        </Title>
        <form name="test" method="post" data-netlify="true">
          <input type="text" name="name" />
          <input type="email" name="email" />
          <button type="submit">send</button>
        </form>
      </Container>
    </Section>
  </Layout>
)

export default SuccessPage
