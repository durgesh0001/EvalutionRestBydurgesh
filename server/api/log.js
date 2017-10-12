'use strict'
exports.Log = function (ds,CustomerID,ClientOsName,ClientModel,ClientOSVersion,ClientManufacturer,Long,Lat,cb) {
  var sql = "DECLARE\t@return_value int\n" +
    "\n" +
    "EXEC\t@return_value = [dbo].[REST_sp_WriteLog]\n" +
    "\t\t@CustomerID = "+CustomerID+",\n" +
    "\t\t@ClientOsName = "+ClientOsName+",\n" +
    "\t\t@ClientModel = "+ClientModel+",\n" +
    "\t\t@ClientOSVersion = "+ClientOSVersion+",\n" +
    "\t\t@ClientManufacturer = "+ClientManufacturer+",\n" +
    "\t\t@Long = "+Long+",\n" +
    "\t\t@Lat = "+Lat+"\n" +
    "\n" +
    "SELECT\t'Return Value' = @return_value";
  ds.connector.query(sql, function (err, data) {
    if (err) {
      cb(null,{status:"0",message:"fail"});
    }
    else
    {
      cb(null,{status:"1",message:"success"});
    }
  });
}
exports.remoteMethod = function (Restapi) {
  Restapi.remoteMethod(
    'Log',
    {
      accepts: [
        {arg: 'CustomerID', type: 'number',required:true},
        {arg: 'ClientOsName', type: 'string',required:true},
        {arg: 'ClientModel', type: 'string',required:true},
        {arg: 'ClientOSVersion', type: 'string',required:true},
        {arg: 'ClientManufacturer', type: 'string',required:true},
        {arg: 'Long', type: 'number',required:true},
        {arg: 'Lat', type: 'number',required:true},
      ],
      returns: {arg: 'result', type: 'object'},
      http: {path: '/Log', verb: 'post'}
    }
  );

}
