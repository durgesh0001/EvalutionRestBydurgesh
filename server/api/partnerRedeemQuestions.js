'use strict'
exports.partnerRedeemQuestions = function (ds,PartnerID,cb) {
  var sql = "DECLARE\t@return_value int\n" +
    "\n" +
    "EXEC\t@return_value = [dbo].[REST_sp_PartnerRedeemQuestions]\n" +
    "\t\t@PartnerID = "+PartnerID+"\n" +
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
    'partnerRedeemQuestions',
    {
      accepts: [
        {arg: 'PartnerID', type: 'string',required:true},
      ],
      returns: {arg: 'result', type: 'object'},
      http: {path: '/Partner/RedeemDetails', verb: 'post'}
    }
  );

}
