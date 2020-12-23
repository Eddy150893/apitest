var soap = require('soap');
var url = 'http://www.crcind.com/csp/samples/SOAP.Demo.cls?wsdl';

let getPersons=(busqueda)=>{
	return new Promise( (resolve,reject) =>{
        var args = {name: busqueda};
        soap.createClient(url, function(err, client) {
            console.log(client)
           if(err!==null){reject(`ha ocurrido un error en la busqueda  ${ err }`)}
            client.GetByNameAsync(args, function(err, result) {
                if(err!==null){reject(`ha ocurrido un error en la busqueda  ${ err }`)}
                if(result.GetByNameResult.diffgram.ListByName==null||result.GetByNameResult.diffgram.ListByName==undefined){
                    const array=[];
                    resolve(array);    
                }
                resolve(result.GetByNameResult.diffgram.ListByName);
            });
        });
	});	
}

module.exports = {
    getPersons
}