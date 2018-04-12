'use strict'
exports.partnerRedeemWrite = function (ds,MemberID,PartnerID,QuestionID,AnswerValue,Lat,Lon,cb) {
  var sql = "DECLARE\t@return_value int\n" +
      "\n" +
      "EXEC\t@return_value = [dbo].[REST_sp_PartnerRedeemWrite]\n" +
      "\t\t@MemberID = "+MemberID+",\n" +
      "\t\t@PartnerID = "+PartnerID+",\n" +
      "\t\t@QuestionID = "+QuestionID+",\n" +
      "\t\t@AnswerValue = '"+AnswerValue+"',\n" +
      "\t\t@Lon = "+Lon+",\n" +
      "\t\t@Lat = "+Lat+"\n" +
      "\n" +
      "SELECT\t'Return Value' = @return_value";
  ds.connector.query(sql, function (err, data) {
    if (err) {
      cb(null,{status:"0",message:"fail"});
    }
    else
    {
      if(data[0] != undefined){
    		if(data[0].RedemptionID == undefined && data[0].RedemptionID === 0){
    			cb(null,{status:"0",message:"fail"});
    		}else if(data[0].RedemptionID > 0){
    			cb(null, {status:"1",message:"success", data: data});
    		}else{
    			cb(null,{status:"0",message:"fail"});
    		}
    	}else{
    		cb(null,{status:"0",message:"fail"});
    	}
    }
  });
}
exports.remoteMethod = function (Restapi) {
  Restapi.remoteMethod(
    'partnerRedeemWrite',
    {
      accepts: [
        {arg: 'MemberID', type: 'number',required:true},
        {arg: 'PartnerID', type: 'number',required:true},
        {arg: 'QuestionID', type: 'string',required:true},
        {arg: 'AnswerValue', type: 'string',required:true},
        {arg: 'Lon', type: 'float',required:true},
        {arg: 'Lat', type: 'float',required:true}

      ],
      returns: {arg: 'result', type: 'object'},
      http: {path: '/Redeem/Details', verb: 'post'}
    }
  );

}
