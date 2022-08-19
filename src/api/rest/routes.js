import { serverStatusRouterV1 } from './v1/server-status/serverStatus.controller.js'
import { categoriesRouterV1 } from './v1/categories/categories.controller.js'

const unknownRoute = (_req, res, _next) => {
    res.status(400).json({
        status: 400,
        data: null,
        error: 'The endpoint does not exist.'
    });
}

export const setupRoutes = (app, apiVersion) => {
    app.use(`${apiVersion}/server-status`, serverStatusRouterV1)
    app.use(`${apiVersion}/categories`, categoriesRouterV1)
    app.use(unknownRoute);
}
