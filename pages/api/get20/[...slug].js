const db = require('../../../data')
const House = db.houses
const Amenities = db.amenities
const Images = db.images
//const Sequelize = require('sequelize')
//const Op=Sequelize.Op
const { Op } = require('sequelize')
const sequelize = require('sequelize')

export default async (req, res) => {


    try {
        const page = req.query.slug[0]
        const sort = req.query.slug[1]
        const start = (page - 1) * 20
        //const end = start + 20
        const sortArr = sort.split('_')
        console.log(sortArr)

        console.log('start', start)
        //console.log('end', end)
        console.log(sortArr)
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

        // for (const item of houses) {
        //     const amens = await Amenities.findAll({
        //         where: {
        //             houseId: item.id
        //         },
        //         raw: true
        //     })
        //     if (amens) {
        //         item.amenities = amens
        //     }

        //     const im = await Images.findAll({
        //         where: {
        //             houseId: item.id
        //         },
        //         raw: true
        //     })
        //     if (im) {
        //         item.images = im
        //     }
        // }
        res.status(200).json(data)
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

//Sequelize.fn(`${sortForSeq}`, Sequelize.col(sortForSeq2))