'use strict'
exports.getPartnerCategory = function (ds,partnerID,cb) {
  var sql = "DECLARE\t@return_value int\n" +
    "\n" +
    "EXEC\t@return_value = [dbo].[REST_sp_PartnerCategory]\n" +
    "\t\t@PartnerID = "+partnerID+"\n" +
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
    'getPartnerCategory',
    {
      accepts: [
        {arg: 'partnerID',type:'number',required:true},
      ],
      returns: {arg: 'result', type: 'object'},
      http: {path: '/Partner/Detail', verb: 'post'}
    }
  );
}
