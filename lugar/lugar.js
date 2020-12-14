const axios = require('axios');

const getLugarLatLong = async(dir) => {

    const encodedUrl = encodeURI(dir);

    // const instance = axios.create({
    //     baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    //     headers: { 'x-rapidapi-key': '6b6c1979f6mshef158fe6bf8ae0bp1518b1jsne27c88558f82' }
    // });

    // const resp = await instance.get();
    // if (resp.data.Results.length === 0) {
    //     throw new Error("No hay resultados para esa ciudad");
    // }
    // const data = resp.data.Results[0];
    const direccion = "Paraná"; //data.name;
    const lat = -31.8078179; // data.lat;
    const lng = -60.5240371; //data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLong
}