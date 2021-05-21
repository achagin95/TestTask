//const db = require('../../data')
// const House = db.houses
// const Amenities = db.amenities
// const Images = db.images
// const {Op} = require('sequelize')

export default async (req, res) => {
    console.log(111111111111111111)

    try {
        console.log(req.query)
        // const houses = await House.findAll({
        //     where: {
        //         [Op.between]: [1,5]
        //     },
        //     raw:true
        // });

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
        res.status(200).json( "houses" )
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}