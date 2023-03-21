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
          }
        }
      }
    }
  `)

  return data.reserveForm.edges[0].node
}

export default useReserveForm
