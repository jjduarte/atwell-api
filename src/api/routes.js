import { serverStatusRouterV1 } from './rest/v1/server-status/serverStatus.controller.js'
import { categoriesRouterV1 } from './rest/v1/categories/categories.controller.js'
import api from '../config/api.js'

const unknownRoute = (req, res, next) => {
    if (req.originalUrl === api.GRAPHQL_PATH) {
        return next()
    }
    res.status(400).json({
        status: 400,
        data: null,
        error: 'The endpoint does not exist.'
    });
}

const setupV1Routes = (app, apiVersion) => {
    app.use(`${apiVersion}/server-status`, serverStatusRouterV1)
    app.use(`${apiVersion}/categories`, categoriesRouterV1)
}

export const setupRoutes = (app) => {
    setupV1Routes(app, '/v1')
    app.use(unknownRoute);
}
