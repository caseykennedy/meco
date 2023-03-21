// useMarquee hook
// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type Props = {
  marquee: {
    edges: {
      node: {
        message: string
      }
    }[]
  }
}

const useMarquee = () => {
  const data = useStaticQuery<Props>(graphql`
    query MarqueeMessageQuery {
      marquee: allSanityMarquee {
        edges {
          node {
            message
          }
        }
      }
    }
  `)

  return data.marquee.edges[0].node
}

export default useMarquee
