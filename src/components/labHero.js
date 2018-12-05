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
import Img from 'gatsby-image'
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
              <Subtitle hasTextColor="white">
                Aquest és un espai per recollir tots aquells projectes que hem
                dut a terme per experimentar amb noves tecnologies web i
                millorar-ne el coneixement abans d'aplicar-les als projectes
                dels nostres clients.
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
