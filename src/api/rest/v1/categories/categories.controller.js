import express from 'express'
import CategoryRepository from '../../../../repository/category.js'

export const categoriesRouterV1 = express.Router()

categoriesRouterV1.get('/', (_req, res) => {

    res.status(200).json({
        status: 200,
        data: {
            categories: CategoryRepository.findAll()
        }
    })
})
