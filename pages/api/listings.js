import fs from 'fs'
import { amenities, images, houses } from '../../data'

export default async (req, res) => {
  await new Promise((resolve, reject) =>
    fs.readFile('data/houses.json', function (err, data) {
      var json = JSON.parse(data);

      json.map(item => {

        const { id, product, address, builder, price, phone, square,
          hasBasement, description, garage, bedrooms, type,
          amenities, images } = item
        const { street, city, state, zip, coordinates } = address
        const { latitude, longitude } = coordinates

        const newHouse = houses.build({
          id, product, address, builder, price, phone, square, hasBasement,
          description, garage, bedrooms, type,
          addressStreet: `${street}`,
          addressCity: `${city}`,
          addressState: `${state}`,
          addressZip: `${zip}`,
          addressCoorLatitude: `${latitude}`,
          addressCoorLongitude: `${longitude}`,
        })
        
        //const newAmenities

      })

      res.status(200).json(json.slice(0, 20));
      resolve(res);




    }));

}
