import chai, {expect} from 'chai'
import api from '../../../../config/api.js'
import CategoryRepository from '../../../../repository/category.js'

describe('Categories testing suite (RestAPI)', () => {

    const API_VERSION = '/v1'

    describe('Finding categories', () => {
        it('should succeed and return all categories with status 200', () => chai
            .request(api.url())
            .get(`${API_VERSION}/categories`)
            .then((res) => {
                expect(res).to.have.status(200)
                expect(res.body.status).to.equal(200)
                expect(res.body.data.categories).to.eql(CategoryRepository.findAll())
            })
        )
    })
})
