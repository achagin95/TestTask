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
        amen ? house.amenities = amen : house.amenities = []
        images ? house.images = images : house.images = []
        
        return house
    } catch (error) {
        
    }
}

export async function getHousesCount() {
    return await db.houses.count()
}
