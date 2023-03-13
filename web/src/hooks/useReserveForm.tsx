// useReserveForm sanity hook
// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type ReserveFormShape = {
  reserveForm: {
    edges: {
      node: {
        _rawMessage: string
        active: boolean
        resOpen: string
        resClosed: string
      }
    }[]
  }
}

const useReserveForm = () => {
  const data = useStaticQuery<ReserveFormShape>(graphql`
    query ReserveFormQuery {
      reserveForm: allSanityReserveForm {
        edges {
          node {
            _rawMessage
            active
            resOpen(formatString: "MMMM DD, yyyy")
            resClosed(formatString: "MMMM DD, yyyy")
          }
        }
      }
    }
  `)

  return data.reserveForm.edges[0].node
}

export default useReserveForm
