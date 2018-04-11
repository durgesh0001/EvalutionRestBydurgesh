'use strict'
exports.memeberOpt = function (ds, MobileNo, cb) {

  var sql = "DECLARE\t@return_value int\n" +
    "\n" +
    "EXEC\t@return_value = [dbo].[REST_sp_GetOTP]\n" +
    "\t\t@MobileNo = '" + MobileNo + "'\n" +
    "\n" +
    "SELECT\t'Return Value' = @return_value";

  ds.connector.query(sql, function (err, data) {
    if (err) {
      cb(null,{status:"0",message:"fail"});
    }
    if (data.length == 1) {
      for (var key in data[0]) {
        var value = data[0][key];
        if (value == "NOTFOUND") {
          cb(null, []);
        }
        else {
          cb(null, data);
        }
      }
    }
    else {
      cb(null, data);
    }
  });
}

exports.remoteMethod = function (Restapi) {
  Restapi.remoteMethod(
    'memeberOpt',
    {
      accepts: [
        {arg: 'MobileNo', type: 'string', required: true},
      ],
      returns: {arg: 'result', type: 'object'},
      http: {path: '/Member/OTP', verb: 'post'}
    }
  );

}
