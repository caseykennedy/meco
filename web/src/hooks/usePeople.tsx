// usePeople hook
// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type Props = {
  people: {
    edges: {
      node: {
        email: string
        name: string
        phone: string
      }
    }[]
  }
}

const usePeople = () => {
  const data = useStaticQuery<Props>(graphql`
    query PeopleQuery {
      people: allSanityPerson(sort: { fields: name, order: ASC }) {
        edges {
          node {
            email
            name
            phone
          }
        }
      }
    }
  `)

  return data.people.edges
}

export default usePeople
