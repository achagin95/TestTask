import Sequelize from 'sequelize'
import { Houses } from './Houses'

const sequelize = new Sequelize('testTaskSmartForce', 'testUser', 'test', {
    dialect: 'mysql',
    host: 'localhost'
})

export const houses = Houses(sequelize)
