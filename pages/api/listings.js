import fs from 'fs'

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
        console.log(id, product, hasBasement)
      })

      console.log(json[0])
      console.log('phone', json[0].phone)
      res.status(200).json(json.slice(0, 20));
      resolve(res);
    }));

}
