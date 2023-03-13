// Gallery:
// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

// Libraries
import Slider from 'react-slick'

// Styles
import * as S from './styles.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Elements
import { Box } from '../../elements'

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

// ___________________________________________________________________

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
                backgroundColor: "transparent"
                formats: WEBP
                layout: FULL_WIDTH
                placeholder: DOMINANT_COLOR
                quality: 60
                aspectRatio: 1.25
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
    adaptiveHeight: false
    // nextArrow: <SampleNextArrow className="js-hover" />,
    // prevArrow: <SamplePrevArrow />
  }
  return (
    <S.Gallery>
      <Slider {...settings}>
        {images.map(({ node: image }) => (
          <Box key={image.id}>
            <GallerySlide image={image} />
          </Box>
        ))}
      </Slider>
    </S.Gallery>
  )
}

export default Gallery

// ___________________________________________________________________
