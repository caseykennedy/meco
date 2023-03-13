declare module '*.svg'
declare module '*.eot'
declare module '*.ttf'
declare module '*.otf'
declare module '*.woff'
declare module '*.woff2'

declare module '@sanity/block-content-to-react'
declare module 'react-anchor-link-smooth-scroll'
declare module 'react-id-swiper'
declare module 'smooth-scrollbar-react'

function createRef<T>(): RefObject<T>
interface RefObject<T> {
  // immutable
  readonly current: T | null
}