import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  Section,
  Container,
  Title,
  Subtitle,
  Columns,
  Column,
} from 'bloomer'
import { Link } from 'gatsby'
import logotype from '../img/logotype_header.png'

const LabHero = props => {
  return (
    <div className="LabHero-Background">
      <Navbar style={{ backgroundColor: 'transparent' }}>
        <NavbarBrand>
          <Link to="/">
            <NavbarItem>
              <img alt="ok studio logotype" src={logotype} />
            </NavbarItem>
          </Link>
        </NavbarBrand>
      </Navbar>
      <Section>
        <Container isFluid>
          <Columns isVCentered>
            <Column>
              <Title hasTextColor="white">Benvinguts al LAB d'OK Studio</Title>
              <Subtitle hasTextColor="white" className="has-text-justified">
                En aquest espai recollirem tots els projectes duts a terme com a
                forma d'experimentació i aprenentatge. Abans d'utilitzar noves
                tecnologies web amb els nostres clients sempre les posem a prova
                en diferents PoC (Proff of Concept)
              </Subtitle>
            </Column>
            <Column hasTextAlign="centered" isOffset={1}>
              <img alt="hero section ilustration" src={props.img} />
            </Column>
          </Columns>
        </Container>
      </Section>
    </div>
  )
}

export default LabHero
