import Sequelize from 'sequelize'
import { Houses } from './Houses'
import { Amenities } from './Amenities'
import { Images } from './Images'

const sequelize = new Sequelize('testTaskSmartForce', 'testUser', 'test', {
    dialect: 'mysql',
    host: 'localhost'
})

sequelize.sync({force:true}).then(()=>{
    console.log('Tables created')
}).catch(err=>console.log(err))

// sequelize.sync().then(result => {
//     console.log(result);
// }).catch(err => console.log(err));

export const houses = Houses(sequelize)
export const images = Images(sequelize)
export const amenities = Amenities(sequelize)