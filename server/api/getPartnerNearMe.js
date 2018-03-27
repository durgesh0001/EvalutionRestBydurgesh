'use strict'
exports.getPartnerNearMe = function (ds,Long,Lat,Radius,CurrentPageNo,TotalRecord,RecordPerPage,cb) {

  var sql = "DECLARE\t@return_value int\n" +
      "\n" +
      "EXEC\t@return_value = [dbo].[REST_sp_PartnerList_NearMe]\n" +
      "\t\t@Long = "+Long+",\n" +
      "\t\t@Lat = "+Lat+",\n" +
      "\t\t@Radius = "+Radius+",\n" +
      "\t\t@CurrentPageNo = "+CurrentPageNo+",\n" +
      "\t\t@TotalRecord = "+TotalRecord+",\n" +
      "\t\t@RecordPerPage = "+RecordPerPage+"\n" +
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
    'getPartnerNearMe',
    {
      accepts: [
        {arg: 'Long', type: 'number',required:true},
        {arg: 'Lat', type: 'number',required:true},
        {arg: 'Radius', type: 'number',required:true},
          {arg: 'CurrentPageNo', type: 'number',required:true},
          {arg: 'TotalRecord', type: 'number',required:true},
          {arg: 'RecordPerPage', type: 'number',required:true},
      ],
      returns: {arg: 'result', type: 'object'},
      http: {path: '/Partners/NearMe', verb: 'post'}
    }
  );

}
