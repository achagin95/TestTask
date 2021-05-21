const db = require('../../../data')
const House = db.houses
const sequelize = require('sequelize')

export default async (req, res) => {


    try {
        const page = req.query.slug[0]
        const sort = req.query.slug[1]
        const start = (page - 1) * 20

        const sortArr = sort.split('_')
 
        const houses = await House.findAll({
            order: sequelize.literal(`${sortArr[0]} ${sortArr.length===1 
                ? "ASC"
                :sortArr[1]==="up"
                ?"ASC"
                :"DESC"}`),
            offset: start,
            limit: 20,
        });

        const data = JSON.stringify(houses)

        res.status(200).json(data)
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

