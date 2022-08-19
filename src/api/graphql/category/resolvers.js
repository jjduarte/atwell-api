import { getAll } from './services.js'

const categoryResolvers = {

    Query: {
        categories: getAll,
    },
}

export default categoryResolvers
