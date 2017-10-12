'use strict'
exports.getAllPartnerList = function (ds,Long,Lat,cb) {
  var sql = "DECLARE\t@return_value int\n" +
    "\n" +
    "EXEC\t@return_value = [dbo].[REST_sp_PartnerList_All]\n" +
    "\t\t@Long = "+Long+",\n" +
    "\t\t@Lat ="+Lat;

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
    'getAllPartnerList',
    {
      accepts: [
        {arg: 'Long', type: 'number',required:true},
        {arg: 'Lat', type: 'number',required:true}
      ],
      returns: {arg: 'result', type: 'object'},
      http: {path: '/Partners/All', verb: 'post'}
    }
  );
}
