import { expect } from 'chai'
import CategoryRepository from './category.js'

describe('Category repository:', () => {
    it('should fetch all 3 categories ', () => {
        const categoriesList = CategoryRepository.findAll()
        expect(categoriesList).to.be.a('array')
        expect(categoriesList).to.have.lengthOf(3)
        expect(categoriesList[0].id).to.equal('spaces')
        expect(categoriesList[1].id).to.equal('fitness')
        expect(categoriesList[2].id).to.equal('womenshealth')
    })
})
