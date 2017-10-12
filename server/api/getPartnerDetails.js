'use strict'
exports.getPartnerDetails = function (ds,partnerID,cb) {
  var sql = "DECLARE\t@return_value int\n" +
    "\n" +
    "EXEC\t@return_value = [dbo].[REST_sp_Partner]\n" +
    "\t\t@partnerID = "+partnerID+"\n" +
    "\n" +
    "SELECT\t'Return Value' = @return_value";

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
    'getPartnerDetails',
    {
      accepts: [
        {arg: 'partnerID',type:'number',required:true},
      ],
      returns: {arg: 'result', type: 'object'},
      http: {path: '/Partner/Detail', verb: 'post'}
    }
  );
}
