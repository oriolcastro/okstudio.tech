import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import FaArrowright from 'react-icons/lib/fa/arrow-right'

import { Title, Subtitle } from 'bloomer'

const ProjectsGridElement = props => {
  return (
    <Link to={props.slug}>
      <div className="projectsgrid_element-container">
        <Img fluid={props.heroImg} />
        <div className="projectsgrid_element-text">
          <Title isSize="4">{props.title}</Title>
          <Subtitle>
            {props.category.map((c, i) => <span key={i}>{c} </span>)}
          </Subtitle>
          <span className="projectsgrid_element-icon">
            <FaArrowright />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ProjectsGridElement
