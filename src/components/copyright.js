import React from 'react'
import FaHeart from 'react-icons/lib/fa/heart'
import { Container } from 'bloomer'

const Copyright = () => (
  <div className="copyright-wrap">
    <Container>
      <p>
        Fet amb <FaHeart className="has-text-danger" /> a Vilanova i la Geltrú
      </p>
    </Container>
  </div>
)

export default Copyright
