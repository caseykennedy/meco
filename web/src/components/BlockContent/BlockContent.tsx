// TODO: Fix types

import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'
import { Text } from '../../elements'
import Figure from './Figure'

type BlockShape = {
  blocks: any
}

const serializers = {
  types: {
    block(props: any) {
      switch (props.node.style) {
        case 'h1':
          return <h1>{props.children}</h1>
        case 'h2':
          return <h2>{props.children}</h2>
        case 'h3':
          return <h3>{props.children}</h3>
        case 'h4':
          return <h4>{props.children}</h4>
        case 'blockquote':
          return <blockquote>{props.children}</blockquote>
        case 'a':
          return (
            <a rel="noopener" target="_blank">
              {props.children}
            </a>
          )
        case 'ul':
          return <ul>{props.children}</ul>
        case 'li':
          return <li>{props.children}</li>
        case 'strong':
          return (
            <Text as="strong" fontWeight={500}>
              {props.children}
            </Text>
          )
        case 'small':
          return (
            <Text as="p" fontSize={1}>
              {props.children}
            </Text>
          )
        default:
          return (
            <Text as="p" fontSize={2}>
              {props.children}
            </Text>
          )
      }
    },
    image(props: any) {
      return <Figure {...props.node} />
    }
  }
}

const BlockContent: React.FC<BlockShape> = ({ blocks }) => (
  <BaseBlockContent
    blocks={blocks}
    imageOptions={{ fit: 'max' }}
    serializers={serializers}
  />
)

export default BlockContent
