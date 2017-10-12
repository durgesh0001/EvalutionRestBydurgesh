'use strict'
exports.getSubCategory = function (ds,MasterCatId,cb) {
  var sql = "DECLARE\t@return_value int\n" +
    "\n" +
    "EXEC\t@return_value = [dbo].[REST_sp_SubCat]\n" +
    "\t\t@MasterCatId = "+MasterCatId+"\n" +
    "\n" +
    "SELECT\t'Return Value' = @return_value";
  ds.connector.query(sql, function (err, data) {
    if (err) {
      console.log(err);
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
    'getSubCategory',
    {
      accepts: [
        {arg: 'MasterCatId', type: 'string',required:true},
      ],
      returns: {arg: 'result', type: 'object'},
      http: {path: '/Search/SubCat', verb: 'post'}
    }
  );

}
