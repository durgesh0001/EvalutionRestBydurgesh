'use strict'
exports.activeMember = function (ds,MobileNo,OTP,cb) {
  var sql = "DECLARE\t@return_value int\n" +
    "\n" +
    "EXEC\t@return_value = [dbo].[REST_sp_ActivateMember]\n" +
    "\t\t@MobileNo = '"+MobileNo+"',\n" +
    "\t\t@OTP = '"+OTP+"'\n" +
    "\n" +
    "SELECT\t'Return Value' = @return_value";
  ds.connector.query(sql, function (err, data) {
    if (err) {
      cb(null,{status:"0",message:"fail"});
    }
    else
    {
    	if(data[0] != undefined){
    		if(data[0].CustomerNo != undefined && data[0].CustomerNo === 0){
    			var error = new Error("");
				error.status = 401;
				return cb(error);

    			//cb(401,{status:"0",message:"OTP does not match"});
    		}else if(data[0].CustomerNo != undefined && data[0].CustomerNo === 1){
    			var error = new Error("");
				error.status = 401;
				return cb(error);

    			//cb(401,{status:"1",message:"user not found"});
    		}else if(data[0].CustomerNo != undefined){
    			cb(null, data[0]);
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
