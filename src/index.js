import api from './config/api.js'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { allResolvers, allTypeDefs } from './utils/graphql.js'
import { setupRoutes } from './api/rest/routes.js'

let server

const getApp = () => {
    const app = express()
    app.use(express.json())
    setupRoutes(app, '/v1')
    return app
}

const getApolloServer = () =>
    new ApolloServer({
        typeDefs: allTypeDefs,
        resolvers: allResolvers(),
        csrfPrevention: true,
        cache: 'bounded',
        debug: false
    })

export const initServer = async () => {
    if (server) {
        return server
    }
    server = getApolloServer()
    await server.start()
    const app = getApp()
    server.applyMiddleware({ app, path: api.GRAPHQL_PATH })
    app.listen(api.PORT, () =>
        console.log(`Server endpoint: ${api.url()}${server.graphqlPath}`)
    )
}

export const closeServer = async () => {
    await server.stop()
    console.error('Server stopped')
}

try {
    await initServer()
} catch (err) {
    console.error('Error starting server', err)
}
