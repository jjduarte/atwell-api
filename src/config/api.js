export default {
    PROTOCOL: 'http',
    HOST: '127.0.0.1',
    PORT: 3030,
    GRAPHQL_PATH: '/graphql',
    url: function () {
        return `${this.PROTOCOL}://${this.HOST}:${this.PORT}`
    },
}
