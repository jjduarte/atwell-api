import { serverStatusRouterV1 } from './v1/server-status/serverStatus.controller.js'
import { categoriesRouterV1 } from './v1/categories/categories.controller.js'

export const setupRoutes = (app, apiVersion) => {
    app.use(`${apiVersion}/server-status`, serverStatusRouterV1)
    app.use(`${apiVersion}/categories`, categoriesRouterV1)
}
