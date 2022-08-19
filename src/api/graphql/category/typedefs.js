import { gql } from 'apollo-server-express'

const categoryTypedefs = gql`

    # Entity
    type Category {
        id: ID!
        title: String!
        c_node_gradient_upper: String
        c_node_gradient_lower: String
    }

    extend type Query {
        # return all categories from the database         
        categories: [Category]
    }
`
export default categoryTypedefs
