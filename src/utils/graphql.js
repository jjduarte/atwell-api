import {mergeResolvers} from '@graphql-tools/merge'
import typedefs from '../api/graphql/default/typedefs.js'
import resolvers from '../api/graphql/default/resolvers.js'

export const allTypeDefs = [typedefs]

export const allResolvers = () => mergeResolvers([resolvers])
