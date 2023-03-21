// Gallery:
// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper'

// Styles
import * as S from './styles.scss'
// import 'swiper/css'

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
                aspectRatio: 1.5
              )
            }
          }
        }
      }
    }
  `)
  const images = data.content.edges
  return (
    <S.Gallery>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        modules={[Autoplay]}
        autoplay={true}
        speed={1000}
        loop={true}
      >
        {images.map(({ node: image }, idx) => (
          <SwiperSlide key={idx}>
            <GallerySlide image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Gallery>
  )
}

export default Gallery

// ___________________________________________________________________
