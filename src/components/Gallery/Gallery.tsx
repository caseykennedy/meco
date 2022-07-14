// Gallery:

// ___________________________________________________________________

// Core
import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { GatsbyImage } from 'gatsby-plugin-image'

// Libraries
import Slider from 'react-slick'
import { useSpring, config } from 'react-spring'

// Components
import Icon from '../Icons'

// Styles
import * as S from './styles.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Elements
import { Box } from '../../elements'

// Theme
import theme from '../../../config/theme'

// import { ChildImageSharp } from '../../types'

// ___________________________________________________________________

type IGatsbyImageData = {
  gatsbyImageData: any
  url: string
}

type QueryShape = {
  content: {
    edges: {
      node: {
        id: string
        childImageSharp: IGatsbyImageData
      }
    }[]
  }
}

type ImageShape = {
  image: {
    childImageSharp: IGatsbyImageData
  }
}

//
// ___________________________________________________________________

// // tslint:disable-next-line: function-name
// function SampleNextArrow(props: SlickProps) {
//   const { className, onClick } = props
//   return (
//     <div className={className} onClick={onClick}>
//       <Icon name="nextArrow" color={theme.colors.white} />
//     </div>
//   )
// }
// // tslint:disable-next-line: function-name
// function SamplePrevArrow(props: SlickProps) {
//   const { className, onClick } = props
//   return <div className={className} onClick={onClick} />
// }

const GallerySlide = ({ image }: ImageShape) => {
  return (
    <GatsbyImage
      alt="MECO | Portable water services for Burning Man"
      // key={image.childImageSharp.fluid.src}
      image={image.childImageSharp.gatsbyImageData}
      objectFit="cover"
      objectPosition="50% 50%"
    />
  )
}

const Gallery: React.FC = () => {
  const data: QueryShape = useStaticQuery(graphql`
    query GalleryImages {
      content: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                quality: 80
              )
            }
          }
        }
      }
    }
  `)
  const images = data.content.edges
  // Slick settings
  const settings = {
    fade: true,
    autoplaySpeed: 4000,
    speed: 1200,
    accessibility: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
    // nextArrow: <SampleNextArrow className="js-hover" />,
    // prevArrow: <SamplePrevArrow />
  }
  const pageAnimation = useSpring({
    config: config.molasses,
    delay: 0,
    from: { transform: theme.transform.matrix.from },
    to: { transform: theme.transform.matrix.to }
  })
  return (
    <S.Gallery width={1} style={pageAnimation}>
      <Slider {...settings}>
        {images.map(({ node: image }) => (
          <Box width={1} key={image.id}>
            <GallerySlide image={image} />
          </Box>
        ))}
      </Slider>
    </S.Gallery>
  )
}

export default Gallery

// ___________________________________________________________________
