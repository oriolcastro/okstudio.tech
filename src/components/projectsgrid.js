import React from 'react'
import Masonry from 'react-masonry-css'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import FaArrowright from 'react-icons/lib/fa/arrow-right'

import { Title, Subtitle } from 'bloomer'

const ProjectsGrid = ({ data }) => {
  var items = [
    {
      id: 1,
      title: 'My First Item',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      img: 'https://picsum.photos/400/?random',
    },
    {
      id: 2,
      title: 'Another item',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      img: 'https://picsum.photos/400/?random',
    },
    {
      id: 3,
      title: 'Third Item',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      img: 'https://picsum.photos/400/?random',
    },
    {
      id: 4,
      title: 'Here is the Fourth',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      img: 'https://picsum.photos/400/?random',
    },
    {
      id: 5,
      title: 'High Five',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      img: 'https://picsum.photos/400/?random',
    },
  ]
  items = items.map(function(item) {
    return (
      <div key={item.id}>
        <Link to="/">
          <div className="projectsgrid_element-container">
            <img src={item.img} />
            <div className="projectsgrid_element-text">
              <Title isSize="4">{item.title}</Title>
              <Subtitle>{item.subtitle}</Subtitle>
              <span className="projectsgrid_element-icon">
                <FaArrowright />
              </span>
            </div>
          </div>
        </Link>
      </div>
    )
  })

  return (
    <Masonry
      breakpointCols={{ default: 3, 1023: 2, 767: 1 }}
      className="projects-grid"
      columnClassName="projects-grid_column"
    >
      {items}
    </Masonry>
  )
}

export default ProjectsGrid
