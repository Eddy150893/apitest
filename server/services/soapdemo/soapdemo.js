var soap = require('soap');
var url = 'http://www.crcind.com/csp/samples/SOAP.Demo.cls?wsdl';

let getPersons=(busqueda)=>{
	return new Promise( (resolve,reject) =>{
        var args = {name: busqueda};
        soap.createClient(url, function(err, client) {
           if(err!==null){reject(`ha ocurrido un error en la busqueda de ${ busqueda }`)}
            client.QueryByName(args, function(err, result) {
                resolve(result.QueryByNameResult.diffgram.QueryByName_DataSet);
            });
        });
	});	
}
module.exports = {
    getPersons
}