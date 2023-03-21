// useServiceGroup sanity hook
// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

export type SanityServiceCategoryNode = {
  _rawBody: string
  _rawBody2: string
  serviceCategoryName: string
  services: {
    _rawDescription: string
    name: string
    price: number
  }[]
  tutorial: {
    caption: string
    title: string
    url: string
  }
}

type SanityServiceCategoryShape = {
  serviceCategories: {
    edges: {
      node: SanityServiceCategoryNode
    }[]
  }
}

const useServiceGroup = () => {
  const data = useStaticQuery<SanityServiceCategoryShape>(graphql`
    query ServiceCategoryQuery {
      serviceCategories: allSanityServiceCategory(
        sort: { order: ASC, fields: serviceCategoryName }
      ) {
        edges {
          node {
            _rawBody
            _rawBody2
            serviceCategoryName
            services {
              _rawDescription
              name
              price
            }
            tutorial {
              caption
              title
              url
            }
          }
        }
      }
    }
  `)

  return data.serviceCategories.edges
}

export default useServiceGroup
