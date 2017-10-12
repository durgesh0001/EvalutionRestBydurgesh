'use strict'
exports.getPartnerListFeature = function (ds,Long,Lat,Radius,MasterCatID,cb) {
  var sql = "DECLARE\t@return_value int\n" +
    "\n" +
    "EXEC\t@return_value = [dbo].[REST_sp_PartnerList_Feature]\n" +
    "\t\t@Long = "+Long+",\n" +
    "\t\t@Lat = "+Lat+",\n" +
    "\t\t@Radius = "+Radius+",\n" +
    "\t\t@MasterCatID = "+MasterCatID+"\n" +
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
    'getPartnerListFeature',
    {
      accepts: [
        {arg: 'Long', type: 'number',required:true},
        {arg: 'Lat', type: 'number',required:true},
        {arg: 'Radius', type: 'number',required:true},
        {arg: 'MasterCatID', type: 'number',required:true}
      ],
      returns: {arg: 'result', type: 'object'},
      http: {path: '/Partners/Featured', verb: 'post'}
    }
  );
}
