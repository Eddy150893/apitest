const express = require("express");
const app = express();
const tvmaze=require("../services/tvmaze/tvmaze");
const itunes=require("../services/itunes/itunes");
app.get("/busqueda",async(req, res)=>{
    let criterio=req.query.criterio;
    if(criterio===undefined){
        return res.status(401).json({
            ok:false,
            err:{
                message:'No ha ingresado un criterio de busqueda'
            }
        })
    }
     await getInfo(criterio)
    .then(respuesta=>res.json({
        ok: true,
        tvmaze:respuesta
    }))
    .catch(console.log);               
});

const getInfo = async(criterio) => {
    try {
        //const tvshows = await tvmaze.getTVShows(criterio)
        //return tvshows;
        const multimedia=await itunes.getMultimedia(criterio);
        return multimedia;
    } catch (e) {
        return `No se pudo hacer una busqueda`;
    }

}
module.exports = app;