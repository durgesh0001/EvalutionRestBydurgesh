'use strict'
exports.activeMember = function (ds,MobileNo,OTP,cb) {
  var sql = "DECLARE\t@return_value int\n" +
    "\n" +
    "EXEC\t@return_value = [dbo].[REST_sp_ActivateMember]\n" +
    "\t\t@MobileNo = '"+MobileNo+"',\n" +
    "\t\t@OTP = '"+OTP+"'\n" +
    "\n" +
    "SELECT\t'Return Value' = @return_value";
    //console.log(sql); return false;
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
    'activeMember',
    {
      accepts: [
        {arg: 'MobileNo', type: 'string',required:true},
        {arg: 'OTP', type: 'string',required:true}
      ],
      returns: {arg: 'result', type: 'object'},
      http: {path: '/Member/Active', verb: 'post'}
    }
  );

}
