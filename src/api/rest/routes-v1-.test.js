import chai, {expect} from 'chai'
import api from '../../config/api.js'

describe('Testing unknown api paths', () => {

        const testUnknownPath = (path) => chai
            .request(api.url())
            .get(path)
            .then((res) => {
                expect(res).to.have.status(400)
                expect(res.body.status).to.equal(400)
                expect(res.body.data).to.equal(null)
                expect(res.body.error).to.equal('The endpoint does not exist.')
            })
        

        it(`should return 404 when accessing unknown path: (/v1/categories/extra-path)`, () =>
            testUnknownPath('/v1/categories/extra-path')
        )

        it(`should return 404 when accessing unknown path: (/v1/server-status/extra-path)`, () =>
            testUnknownPath('/v1/server-status/extra-path')
        )

        it(`should return 404 when accessing unknown path: (/v1/inexistent-path)`, () =>
            testUnknownPath('/v1/inexistent-path')
        )

        it(`should return 404 when accessing unknown path: (/categories/extra-path)`, () =>
            testUnknownPath('/categories/extra-path')
        )

        it(`should return 404 when accessing unknown path: (/server-status/extra-path)`, () =>
            testUnknownPath('/server-status/extra-path')
        )

        it(`should return 404 when accessing unknown path: (/inexistent-path)`, () =>
            testUnknownPath('/inexistent-path')
        )

        it(`should return 404 when accessing unknown path: (/v1/categories)`, () =>
            testUnknownPath('/v1/category')
        )
})
