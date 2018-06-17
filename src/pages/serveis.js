import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'

import { Section, Container } from 'bloomer'

import PageHero from '../components/pagehero'
import Service from '../components/service'
import CTABanner from '../components/ctabanner'

const ServeisPage = () => (
  <Layout>
    <PageHero
      title="adipiscing commodo"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    />
    <Section>
      <Container>
        <Service
          title="Servei 1"
          valueprop="Ho fem molt bé i ens has de contractar"
          img="https://picsum.photos/400/300/?gravity=center"
          CTAexamplelink="/"
        />
        <Service
          title="Servei 1"
          valueprop="Ho fem molt bé i ens has de contractar"
          img="https://picsum.photos/400/300/?gravity=center"
          CTAexamplelink="/"
        />
        <Service
          title="Servei 1"
          valueprop="Ho fem molt bé i ens has de contractar"
          img="https://picsum.photos/400/300/?gravity=center"
          CTAexamplelink="/"
        />
      </Container>
    </Section>
    <CTABanner
      content="Coneixes com treballem?"
      buttonText="Descobreix el nostre mètode"
      buttonLink="/metode"
    />
  </Layout>
)

export default ServeisPage
