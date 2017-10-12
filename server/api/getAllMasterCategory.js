'use strict'
exports.getAllMasterCategory = function (ds,cb) {
  var sql = "DECLARE\t@return_value int\n" +
    "\n" +
    "EXEC\t@return_value = [dbo].[REST_sp_MasterCat]\n" +
    "\n" +
    "SELECT\t'Return Value' = @return_value"

  ds.connector.query(sql, function (err, data) {
    if (err) {
      cb(null,{status:"0",message:"fail"});
    }
    else
    {
      cb(null, data);
    }
  });
}

exports.remoteMethod = function (Restapi) {
  Restapi.remoteMethod(
    'getAllMasterCategory',
    {
      accepts: [],
      returns: {arg: 'result', type: 'object'},
      http: {path: '/Search/MasterCategory', verb: 'get'}
    }
  );
}
