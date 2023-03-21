import React from 'react'
import Image from 'gatsby-plugin-sanity-image'
import { Box } from '../../elements'

const Figure = (props: any) => {
  return (
    <Box as="figure" my={6} mx="auto" width="auto">
      {props.asset && (
        <Image
          {...props}
          alt={props.alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      )}
      <figcaption>{props.caption}</figcaption>
    </Box>
  )
}

export default Figure
