import React from 'react'
import FaHeart from 'react-icons/lib/fa/heart'
import { Container, Columns, Column } from 'bloomer'
import { Link } from 'gatsby'

const Copyright = () => (
  <div className="copyright-wrap">
    <Container>
      <Columns>
        <Column isSize="3/4">
          <p>
            Fet amb <FaHeart className="has-text-danger" /> a Vilanova i la
            Geltrú
          </p>
        </Column>
        <Column>
          <Link to="/credits">
            <p>Credit</p>
          </Link>
        </Column>
      </Columns>
    </Container>
  </div>
)

export default Copyright
