import { categoryDB } from '../.db/category.js'

export default class CategoryRepository {

    static findAll() {
        return categoryDB;
    }

}
