'use strict'
exports.getPartnerRefined = function (ds,Long,Lat,MasterCat,FilterString,Radius,Partner,cb) {
  console.log('Param:---', Long,Lat,MasterCat,FilterString,Radius,Partner)
  if(Partner != undefined || Partner != 'undefined')
  {
      Partner = '"'+Partner+'"';

  }
    if(FilterString != undefined || FilterString != 'undefined')
    {
        FilterString = '"'+FilterString+'"';

    }
  var sql = "DECLARE\t@return_value int\n" +
      "\n" +
      "EXEC\t@return_value = [dbo].[REST_sp_PartnerList_Refined]\n" +
      "\t\t@Long = "+Long+",\n" +
      "\t\t@Lat = "+Lat+",\n" +
      "\t\t@MasterCat = "+MasterCat+",\n" +
      "\t\t@FilterString = "+FilterString+",\n" +
      "\t\t@Radius = "+Radius+",\n" +
      "\t\t@Partner = "+Partner+"\n" +
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
    'getPartnerRefined',
    {
      accepts: [
        {arg: 'Long',type:'number',required:true},
        {arg: 'Lat',type:'number',required:true},
        {arg: 'MasterCat',type:'number',required:true},
        {arg: 'FilterString',type:'string',required:true},
        {arg: 'Radius',type:'number',required:true},
        {arg: 'Partner',type:'string',required:false},
      ],
      returns: {arg: 'result', type: 'object'},
      http: {path: '/Partners/Refine', verb: 'post'}
    }
  );
}

