import CategoryRepository from '../../../repository/category.js'

export const getAll = () => CategoryRepository.findAll()
