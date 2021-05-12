import {reader} from './functions/reader'

export default async (req, res) => {
  try {
    const json = await reader()
    // console.log('')

    // await json.map(async (item) => {
    //   try {
    //     const { id, product, address, builder, price, phone, square,
    //       hasBasement, description, garage, bedrooms, type,
    //       amenities, images } = item
    //     const { street, city, state, zip, coordinates } = address
    //     const { latitude, longitude } = coordinates
    //     const idForDB = id + 1
    //     const newHouse = houses.build({
    //       id: idForDB, product, address, builder, price, phone, square, hasBasement,
    //       description, garage, bedrooms, type,
    //       addressStreet: `${street}`,
    //       addressCity: `${city}`,
    //       addressState: `${state}`,
    //       addressZip: `${zip}`,
    //       addressCoorLatitude: `${latitude}`,
    //       addressCoorLongitude: `${longitude}`,
    //     })
    //     await newHouse.save()

    //     if (amenities && amenities.length > 0) {
    //       await amenities.map(async (itemAmen) => {
    //         try {
    //           const newAmenitie = Amenities.build({
    //             amenitiesName: `${itemAmen}`,
    //             houseId: idForDB,
    //           })
    //           const result = await newAmenitie.save()
    //           console.log('result', result)
    //         } catch (error) {

    //         }
    //       })
    //     }

    //     if (images && images.length > 0) {
    //       await images.map(async (itemIm) => {
    //         try {
    //           const newImage = Images.build({
    //             imageUrl: `${itemIm}`,
    //             houseId: idForDB,
    //           })
    //           await newImage.save()
    //         } catch (error) {
    //         }
    //       })
    //     }

    //     console.log('id: ', id, 'done')
    //   } catch (error) {

    //   }

    // })


    res.json(json)
  } catch (error) {
    res.status(500).json(error)
  }

}

