const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=433e23038e7164a51727af2db1d1ab6a&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}