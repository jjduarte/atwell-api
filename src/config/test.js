import chai from 'chai'
import chaiHttp from 'chai-http'
import { initServer, closeServer } from '../index.js'

export async function mochaGlobalSetup() {
    chai.use(chaiHttp)
    await initServer()
}

export async function mochaGlobalTeardown() {
    await closeServer()
}
