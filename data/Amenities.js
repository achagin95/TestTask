import Sequelize from 'sequelize'
const houses = require('./Houses')

export const Amenities = function(sequelize) {
    return sequelize.define('amenities', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        amenitiesName: {
            type: Sequelize.STRING
        },
        houseId: {
            type: Sequelize.INTEGER,
            references: {
                model: houses,
                key: 'id'
            }
        }
    }, {
        timestamps: false
    })
}