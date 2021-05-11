import Sequelize from 'sequelize'

export const Houses = function (sequelize) {
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
        addressStreet: {
            type: Sequelize.STRING
        },
        addressCity: {
            type: Sequelize.STRING
        },
        addressState: {
            type: Sequelize.STRING
        },
        addressZip: {
            type: Sequelize.STRING
        },
        addressCoorLatitude: {
            type: Sequelize.STRING
        },
        addressCoorLongitude: {
            type: Sequelize.STRING
        },
        builder: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        },
        phone: {
            type: Sequelize.STRING
        },
        square: {
            type: Sequelize.INTEGER
        },
        hasBasement: {
            type: Sequelize.BOOLEAN
        },
        description: {
            type: Sequelize.STRING
        },
        garage: {
            type: Sequelize.INTEGER
        },
        bedrooms: {
            type: Sequelize.INTEGER
        }

    }, {
        timestamps: false
    })
}

