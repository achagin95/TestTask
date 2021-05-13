const db = require('../../data')
const House = db.houses

export default async (req, res) => {

    try {
        const houses = await House.findAll();
        //console.log('11Connection has been established successfully.', houses);
        //let arr = []
        // houses.map((item)=> {
        //     arr.push(item.dataValues)
        // })
        res.status(200).json( houses )
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}