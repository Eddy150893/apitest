var soap = require('soap');
var url = 'http://www.crcind.com/csp/samples/SOAP.Demo.cls?wsdl';
var args = {name: 'jack'};
soap.createClient(url, function(err, client) {
    client.QueryByName(args, function(err, result) {
        console.log(result.QueryByNameResult.diffgram.QueryByName_DataSet);
    });
});

