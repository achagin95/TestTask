import fs from 'fs'

export async function reader() {
    await new Promise((resolve, reject) =>
        fs.readFile('data/houses.json', function (err, data) {
            console.log('reader')
            const json = JSON.parse(data);
            console.log(json[0])
            resolve(json)
        }));

}