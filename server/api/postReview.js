'use strict'
exports.postReview = function (ds,PartnerID,MembershipId,comment,Overall,Taste,Value,Ambience,Quality,Service,cb) {
    var sql = "DECLARE @return_value int\n" +
        "\n" +
        "EXEC @return_value = [dbo].[REST_sp_PostReview]\n" +
        "  @PartnerID = "+PartnerID+",\n" +
        "  @MembershipId = "+MembershipId+",\n" +
        "  @comment = "+comment+",\n" +
        "  @Overall = "+Overall+",\n" +
        "  @Taste = "+Taste+",\n" +
        "  @Value = "+Value+",\n" +
        "  @Ambience = "+Ambience+",\n" +
        "  @Quality = "+Quality+",\n" +
        "  @Service = "+Service+"\n" +
        "\n" +
        "SELECT 'Return Value' = @return_value\n";

    ds.connector.query(sql, function (err, data) {
        if (err) {
            cb(null,{status:"0",message:"fail"});
            console.log(err);
        }
        else
        {
            console.log(data);
            cb(null,{status:"1",message:"success"});
        }
    });
}
exports.remoteMethod = function (Restapi) {
    Restapi.remoteMethod(
        'postReview',
        {
            accepts: [
                {arg: 'PartnerID', type: 'number',required:true},
                {arg: 'MembershipId', type: 'number',required:true},
                {arg: 'comment', type: 'string',required:true},
                {arg: 'Overall', type: 'number',required:true},
                {arg: 'Taste', type: 'number',required:true},
                {arg: 'Value', type: 'number',required:true},
                {arg: 'Ambience', type: 'number',required:true},
                {arg: 'Quality', type: 'number',required:true},
                {arg: 'Service', type: 'number',required:true}

            ],
            returns: {arg: 'result', type: 'object'},
            http: {path: '/postReview', verb: 'post'}
        }
    );

}
