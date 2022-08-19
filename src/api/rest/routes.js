import { serverStatusRouterV1 } from './v1/server-status/serverStatus.controller.js'

export const setupRoutes = (app, apiVersion) => {
    app.use(`${apiVersion}/server-status`, serverStatusRouterV1)
}
