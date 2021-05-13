const db = require('../../data')
const House = db.houses
const Amenities = db.amenities
const Images = db.images

export default async (req, res) => {

    try {
        const houses = await House.findAll({raw:true});

        for (const item of houses) {
            const amens = await Amenities.findAll({
                where: {
                    houseId: item.id
                }
            })
            if (amens) {
                item.amenities = amens
            }

            const im = await Images.findAll({
                where: {
                    houseId: item.id
                }
            })
            if (im) {
                item.images = im
            }
        }


        res.status(200).json( houses )
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}