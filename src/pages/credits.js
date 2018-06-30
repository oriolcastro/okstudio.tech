import React from 'react'
import Layout from '../components/layout'

import { Section, Container, Content, Title, Subtitle } from 'bloomer'

const CreditsPage = () => (
  <Layout>
    <Section>
      <Container>
        <Title>Crèdits</Title>
        <Subtitle>
          Referències als diferents recursos externs utilitzats en aquesta
          pàgina
        </Subtitle>
      </Container>
    </Section>
    <Section>
      <Container>
        <Content>
          <Title isSize="4">Iconografia</Title>
          <ul>
            <li>
              <a
                href="https://thenounproject.com/term/growth/1666183/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Growth
              </a>{' '}
              by Vectors Market from{' '}
              <a
                href="https://thenounproject.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                the Noun Project
              </a>
            </li>
            <li>
              <a
                href="https://thenounproject.com/term/user-management/1666145//"
                target="_blank"
                rel="noopener noreferrer"
              >
                User Management
              </a>{' '}
              by Vectors Market from{' '}
              <a
                href="https://thenounproject.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                the Noun Project
              </a>
            </li>
            <li>
              <a
                href="https://thenounproject.com/term/page-optimization/1575892/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Page optimization
              </a>{' '}
              by Vectors Market from{' '}
              <a
                href="https://thenounproject.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                the Noun Project
              </a>
            </li>
            <li>
              <a
                href="https://thenounproject.com/term/agile-method/611212/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agile method
              </a>{' '}
              by Hare Krishna from{' '}
              <a
                href="https://thenounproject.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                the Noun Project
              </a>
            </li>
          </ul>
          <Title isSize="4">Imatges</Title>
          <ul>
            <li>
              "Proximitat" by{' '}
              <a
                href="https://unsplash.com/photos/UCZF1sXcejo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"
              >
                Štefan Štefančík
              </a>{' '}
              on{' '}
              <a
                href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash
              </a>
            </li>
            <li>
              "Col·laboració" by{' '}
              <a
                href="https://unsplash.com/photos/rKJOD7Vs6Ug?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"
              >
                raw pixel
              </a>{' '}
              on{' '}
              <a
                href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash
              </a>
            </li>
            <li>
              "Compromís" by{' '}
              <a
                href="https://unsplash.com/photos/0gO3-b-5m80?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stefan Cosma
              </a>{' '}
              on{' '}
              <a
                href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash
              </a>
            </li>
          </ul>
        </Content>
      </Container>
    </Section>
  </Layout>
)

export default CreditsPage
