import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import typedefs from '../api/graphql/default/typedefs.js'
import resolvers from '../api/graphql/default/resolvers.js'
import categoryTypedefs from '../api/graphql/category/typedefs.js'
import categoryResolvers from '../api/graphql/category/resolvers.js'

export const allTypeDefs = () => mergeTypeDefs([typedefs, categoryTypedefs])

export const allResolvers = () => mergeResolvers([resolvers, categoryResolvers])
