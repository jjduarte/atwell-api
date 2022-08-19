import api from '../../../../config/api.js'
import chai, {expect} from 'chai'

describe('Server status testing suite', () => {

    const API_VERSION = '/v1'

    describe('Test server-status', () => {
        it('should receive status 200 for server-status endpoint', () => chai
            .request(api.url())
            .get(`${API_VERSION}/server-status`)
            .then((res) => {
                expect(res).to.have.status(200)
                expect(res.body).to.be.eql({})
            })
        )
    })
})
