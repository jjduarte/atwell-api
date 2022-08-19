import api from '../../../config/api.js'
import chai, {expect} from 'chai'

const GET_VALID_QUERY = () => JSON.stringify({
    query: `
        query categoriesQuery {
            categories {
                id
                title
                c_node_gradient_lower
                c_node_gradient_upper
            }
        }
    `,
})

const GET_INVALID_QUERY = () => JSON.stringify({
    query: `
        query categoriesQuery {
            categories {
                id
                amount
            }
        }
    `,
})

describe('Categories testing suite (graphQL)', () => {

    describe('Fetch all categories', () => {
        it('should return all categories (3)', () => chai
            .request(api.url())
            .post(api.GRAPHQL_PATH)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send(GET_VALID_QUERY())
            .then((res) => {
                expect(res).to.have.status(200)
                expect(res).to.be.json
                expect(res.body.data.categories).to.be.a('array')
                expect(res.body.data.categories).to.have.lengthOf(3)
                expect(res.body.data.categories[0].id).to.equal('spaces')
                expect(res.body.data.categories[1].id).to.equal('fitness')
                expect(res.body.data.categories[2].id).to.equal('womenshealth')
            })
        )

        it('should return standard error object when querying for an undefined field (amount)', () => chai
            .request(api.url())
            .post(api.GRAPHQL_PATH)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send(GET_INVALID_QUERY())
            .then((res) => {
                expect(res).to.have.status(400)
                expect(res).to.be.json
                expect(res.body.errors[0].message).to.match(/Cannot query field "amount" on type "Category"./)
            })
        )
    })
})
