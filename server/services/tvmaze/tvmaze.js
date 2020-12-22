const axios = require('axios');

const getTVShows = async(busqueda) => {
    const resp = await axios.get(`http://api.tvmaze.com/search/shows?q=${busqueda}`)
    return resp.data;
}

module.exports = {
    getTVShows
}