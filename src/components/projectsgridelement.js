import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import FaArrowright from 'react-icons/lib/fa/arrow-right'

import { Title, Tag } from 'bloomer'

const ProjectsGridElement = props => {
  return (
    <Link to={props.slug}>
      <div className="projectsgrid_element-container">
        <Img fluid={props.masonryImg} />

        <div className="projectsgrid_element-text">
          <Title isSize="4">{props.title}</Title>
          {props.category.map((c, i) => (
            <div className="button-wrapper">
              <Tag isColor="white" key={i}>
                {c}{' '}
              </Tag>
            </div>
          ))}
          <span className="projectsgrid_element-icon">
            <FaArrowright />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ProjectsGridElement
