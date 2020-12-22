const axios = require('axios');

const getMultimedia = async(busqueda) => {
    const resp = await axios.get(`https://itunes.apple.com/search?term=${busqueda}`)
    return resp.data;
}

module.exports = {
    getMultimedia
}