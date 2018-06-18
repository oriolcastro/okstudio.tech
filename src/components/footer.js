import React from 'react'
import { Link } from 'gatsby'
import { Footer, Container, Content, Columns, Column, Title } from 'bloomer'
import FaTwitter from 'react-icons/lib/fa/twitter-square'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaGithub from 'react-icons/lib/fa/github-square'

import logotype from '../img/logotype.png'
const AppFooter = () => (
  <div>
    <Footer id="footer">
      <Container>
        <Content>
          <Columns isMobile isMultiline>
            <Column className="is-3-desktop is-6-tablet is-12-mobile">
              <img alt="" src={logotype} className="logotype" />
              <Content className="adress-container">
                <p>C/ Sant Onofre 93 bxs</p>
                <p>Vilanova i la Geltrú </p>
                <p>08800 Barcelona</p>
              </Content>
              <p>hola@okstudio.tech</p>
            </Column>
            <Column className="is-3-desktop is-6-tablet">
              <Title isSize="5">Que fem</Title>
              <Link to="/serveis">
                <p>Consultoria tecnològica</p>
              </Link>
              <Link to="/serveis">
                <p>Transoformació digital</p>
              </Link>
              <Link to="/serveis">
                <p>Optimització de processos</p>
              </Link>
              <Link to="/serveis">
                <p>Desenvolupament apps internes</p>
              </Link>
              <Link to="/serveis">
                <p>Creació pàgines web</p>
              </Link>
              <Link to="/serveis">
                <p>Aplicacions web mobil</p>
              </Link>
              <Title isSize="5" hasTextColor="$grey-dark">
                Com treballem
              </Title>
              <Link to="/metode">
                <p>Coneix el nostre mètode</p>
              </Link>
            </Column>
            <Column className="is-3-desktop is-6-tablet">
              <Content>
                <Title isSize="5">Projectes</Title>
                <Link to="/projectes">
                  <p>Projecte destacat 1</p>
                </Link>
                <Link to="/projectes">
                  <p>Projectes destacat 2</p>
                </Link>
                <Link to="/projectes">
                  <p>Projectes destacat 3</p>
                </Link>
              </Content>

              <Link to="/bloc">
                <Title isSize="5">Bloc</Title>
              </Link>

              <Link to="/contacte">
                <Title isSize="5">Contacte</Title>
              </Link>
            </Column>
            <Column className="is-3-desktop is-6-tablet is-12-mobile">
              <Title isSize="5">Xarxes</Title>
              <div>
                <a
                  href="https://twitter.com/_okstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="my-icon-container">
                    <FaTwitter size={32} />
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/_okstudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="my-icon-container">
                    <FaInstagram size={32} />
                  </span>
                </a>
                <a
                  href="https://github.com/oriolcastro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="my-icon-container">
                    <FaGithub size={32} />
                  </span>
                </a>
              </div>
            </Column>
          </Columns>
        </Content>
      </Container>
    </Footer>
  </div>
)

export default AppFooter
