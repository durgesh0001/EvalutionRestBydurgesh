'use strict'
exports.createNewSalesLead = function (ds,Firstname,Surname,MobileNo,cb) {
    Firstname = '"'+Firstname+'"';
    Surname = '"'+Surname+'"';

    var sql = "DECLARE\t@return_value int\n" +
    "\n" +
    "EXEC\t@return_value = [dbo].[REST_sp_CreateNewSalesLead]\n" +
    "\t\t@Firstname = "+Firstname+",\n" +
    "\t\t@Surname = "+Surname+",\n" +
    "\t\t@MobileNo = '"+MobileNo+"'\n" +
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
    'createNewSalesLead',
    {
      accepts: [
        {arg: 'Firstname', type: 'string',required:true},
        {arg: 'Surname', type: 'string',required:true},
        {arg: 'MobileNo', type: 'string',required:true},
      ],
      returns: {arg: 'result', type: 'object'},
      http: {path: '/Member/New', verb: 'post'}
    }
  );

}
