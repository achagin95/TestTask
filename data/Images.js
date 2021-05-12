import Sequelize from 'sequelize'
const houses = require('./Houses')

export const Images = function(sequelize) {
    return sequelize.define('images', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        imageUrl: {
            type: Sequelize.STRING
        },
        houseId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'houses',
                key: 'id'
            }
        }
    }, {
        timestamps: false
    })
}
