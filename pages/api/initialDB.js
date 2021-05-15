import fs from 'fs'
import { amenities as Amenities, images as Images, houses } from '../../data'


//т.к. в задании было сказано использовать реальную БД+секвалайз, взял Mysql
//т.к. данная функция нужна лишь один разЮ чтобы перенести БД из Houses.json в таблицы, никаких проверок (например: findOne) не добавлял
// следовательно, при повторном вызове Mysql выдаст ошибку о добавлении существующего жкземпляра, а функция выдаст ошибку со статусом 500 и message: 'error initial DB'
export default async (req, res) => {
  try {
    const json = await new Promise((resolve, reject) =>
      fs.readFile('data/houses.json', (err, data) => {
        const json = JSON.parse(data);
        resolve(json)
      })).catch(err => console.log(err))

    for (const item of json) {
      const { id, product, address, builder, price, phone, square,
        hasBasement, description, garage, bedrooms, type,
        amenities, images } = item
      const { street, city, state, zip, coordinates } = address
      const { latitude, longitude } = coordinates
      const idForDB = id + 1

      const newHouse = houses.build({
        id: idForDB, product, address, builder, price, phone, square, hasBasement,
        description, garage, bedrooms, type,
        addressStreet: `${street}`,
        addressCity: `${city}`,
        addressState: `${state}`,
        addressZip: `${zip}`,
        addressCoorLatitude: `${latitude}`,
        addressCoorLongitude: `${longitude}`,
      })
      await newHouse.save()

      if (amenities && amenities.length > 0) {
        for (const itemAmen of amenities) {
          const newAmenitie = Amenities.build({
            amenitiesName: `${itemAmen}`,
            houseId: idForDB,
          })
          await newAmenitie.save()
        }
      }

      if (images && images.length > 0) {
        for (const itemIm of images) {
          const newImage = Images.build({
            imageUrl: `${itemIm}`,
            houseId: idForDB,
          })
          await newImage.save()
        }
      }
    }

    res.json({ message: 'initial DB succes' })
  } catch (error) {
    res.status(500).json({message: 'error initial DB'})
  }

}

