const express = require("express");
const app = express();
const tvmaze=require("../services/tvmaze/tvmaze");
const itunes=require("../services/itunes/itunes");
const soapdemo=require("../services/soapdemo/soapdemo");
app.get("/busqueda",async(req, res)=>{
    let criterio=req.query.criterio;
    if(criterio===undefined||criterio.length<=0){
        return res.status(401).json({
            ok:false,
            err:{
                message:'No ha ingresado un criterio de busqueda'
            }
        })
    }
     await getInfo(criterio)
    .then(respuesta=>res.status(200).json({
        ok: true,
        data:respuesta
    }))
    .catch(console.log);               
});

const getInfo = async(criterio) => {
    let result={};
    try {
        const persons=await soapdemo.getPersons(criterio).then(persons=>{if(persons!=null){return persons.SQL}});
        const tvshows = await tvmaze.getTVShows(criterio)
        const multimedia=await itunes.getMultimedia(criterio);
        result.soapdemo=persons;
        result.tvmaze=tvshows;
        result.itunes=multimedia;
        return result;
    } catch (e) {
        return `No se pudo hacer una busqueda`;
    }

}
module.exports = app;