const db = require('../data')

export async function getHouseById(id) {
    try {
        const house = await db.houses.findOne({
            where: {
                id: id
            },
            raw: true
        }) 
        const amen = await db.amenities.findAll({
            where: {
                houseId: id
            },
            raw: true
        })
        const images = await db.images.findAll({
            where: {
                houseId: id
            },
            raw: true
        })
        if (amen){ 
            house.amenities = amen
        } else {
            house.amenities = []
        }
        if (images) {
            house.images = images
        } else {
            house.images = []
        }
        return house
    } catch (error) {
        
    }
}

export function getImagesByHouseId(houseId) {

}

export function getAmenitiesByHouseId(houseId) {

}