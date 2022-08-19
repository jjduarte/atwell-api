import {gql} from 'apollo-server-express'

const typedefs = gql`
    type Query {
        _: String
    }
`
export default typedefs
