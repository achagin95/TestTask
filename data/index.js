import Sequelize from 'sequelize'
import { Houses } from './Houses'
import {Amenities} from './Amenities'
import {Images} from './Images'

const sequelize = new Sequelize('testTaskSmartForce', 'testUser', 'test', {
    dialect: 'mysql',
    host: 'localhost'
})

export const houses = Houses(sequelize)
export const images = Images(sequelize)
export const amenities = Amenities(sequelize)