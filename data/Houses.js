import Sequelize from 'sequelize'

export const Houses = function(sequelize) {
    return sequelize.define('houses', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        product: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        }
    }, {
        timestamps:false
    })
}

