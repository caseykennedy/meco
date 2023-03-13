// Icons Component:
// https://fontawesome.com/icons/
// Add custom icons via 'case'.

// ___________________________________________________________________

import React from 'react'

import * as S from './styles.scss'

// Icons
import Carat from './SVG/Carat'
import Chevron from './SVG/Chevron'
import Checkmark from './SVG/Checkmark'
import Document from './SVG/Document'
import Download from './SVG/Download'
import ExternalLink from './SVG/ExternalLink'
import Facebook from './SVG/Facebook'
import GridView from './SVG/GridView'
import Handshake from './SVG/Handshake'
import Instagram from './SVG/Instagram'
import ListView from './SVG/ListView'
import NextArrow from './SVG/NextArrow'
import Pdf from './SVG/Pdf'
import Plus from './SVG/Plus'
import Pin from './SVG/Pin'
import Twitter from './SVG/Twitter'
import Youtube from './SVG/Youtube'

// ___________________________________________________________________

type Props = {
  name:
    | 'arrow'
    | 'carat'
    | 'chevron'
    | 'checkmark'
    | 'document'
    | 'download'
    | 'external-link'
    | 'facebook'
    | 'grid-view'
    | 'handshake'
    | 'instagram'
    | 'list-view'
    | 'pdf'
    | 'plus'
    | 'pin'
    | 'twitter'
    | 'youtube'
  className?: string
  color?: string
  fas?: string
}

const Icon = ({ name, className, color, fas }: Props) => {
  switch (name) {
    case 'arrow':
      return (
        <S.Icon color={color} className={className}>
          <NextArrow />
        </S.Icon>
      )
    case 'carat':
      return (
        <S.Icon color={color} className={className}>
          <Carat />
        </S.Icon>
      )
    case 'chevron':
      return (
        <S.Icon color={color} className={className}>
          <Chevron />
        </S.Icon>
      )
    case 'checkmark':
      return (
        <S.Icon color={color} className={className}>
          <Checkmark />
        </S.Icon>
      )
    case 'document':
      return (
        <S.Icon color={color} className={className}>
          <Document />
        </S.Icon>
      )
    case 'download':
      return (
        <S.Icon color={color} className={className}>
          <Download />
        </S.Icon>
      )
    case 'external-link':
      return (
        <S.Icon color={color} className={className}>
          <ExternalLink />
        </S.Icon>
      )
    case 'facebook':
      return (
        <S.Icon color={color} className={className}>
          <Facebook />
        </S.Icon>
      )
    case 'grid-view':
      return (
        <S.Icon color={color} className={className}>
          <GridView />
        </S.Icon>
      )
    case 'handshake':
      return (
        <S.Icon color={color} className={className}>
          <Handshake />
        </S.Icon>
      )
    case 'instagram':
      return (
        <S.Icon color={color} className={className}>
          <Instagram />
        </S.Icon>
      )
    case 'list-view':
      return (
        <S.Icon color={color} className={className}>
          <ListView />
        </S.Icon>
      )
    case 'pdf':
      return (
        <S.Icon color={color} className={className}>
          <Pdf />
        </S.Icon>
      )
    case 'plus':
      return (
        <S.Icon color={color} className={className}>
          <Plus />
        </S.Icon>
      )
    case 'pin':
      return (
        <S.Icon color={color} className={className}>
          <Pin />
        </S.Icon>
      )
    case 'twitter':
      return (
        <S.Icon color={color} className={className}>
          <Twitter />
        </S.Icon>
      )
    case 'youtube':
      return (
        <S.Icon color={color} className={className}>
          <Youtube />
        </S.Icon>
      )
    default:
      return (
        <S.Icon color={color} className="ico">
          <i className={fas ? `fas fa-${name}` : `fas fab fa-${name}`} />
        </S.Icon>
      )
  }
}

export default Icon

// ___________________________________________________________________
