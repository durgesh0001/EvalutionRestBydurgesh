'use strict';
var app = require('../../server/server');
var getPartnerList = require('../api/getPartnerNearMe');
var getAllPartnerList = require('../api/getPartnerListAll');
var getPartnerListFeature = require('../api/getPartnerListFeature');
var getMasterCategory = require('../api/getAllMasterCategory');
var getMemberShipDetails = require('../api/getMemberShipDetails');
var getCity = require('../api/getCity');
var getPartnerDetails = require('../api/getPartnerDetails');
var getPartnerRefined = require('../api/getPartnerRefined')
var createNewSalesLead = require('../api/createNewSalesLead');
var memeberOpt  = require('../api/memeberOtp');
var activeMember = require('../api/activeMember');
var partnerRedeemQuestions = require('../api/partnerRedeemQuestions');
var partnerRedeemWrite = require('../api/partnerRedeemWrite');
var getSubCategory = require('../api/getSubCategory');
var Log = require('../api/log');
module.exports = function (Restapi) {
  var ds = app.dataSources.sqlserver;
  /*
   @mathod getPartnerNearMe
   @description  get partner near me
   @param Long,Lat,Radius
  */
  Restapi.getPartnerNearMe = function (Long, Lat, Radius, cb) {
    getPartnerList.getPartnerNearMe(ds, Long, Lat, Radius, cb);
  };
  getPartnerList.remoteMethod(Restapi);


  /*
    @mathod getAllPartnerList
    @description  get all partners list
    @param Long,Lat
   */
  Restapi.getAllPartnerList = function (Long, Lat, cb) {
    getAllPartnerList.getAllPartnerList(ds, Long, Lat, cb);
  };
  getAllPartnerList.remoteMethod(Restapi);


  /*
    @mathod getPartnerListFeature
    @description  get partner list feature
    @param Long,Lat,Radius,MasterCatID
   */
  Restapi.getPartnerListFeature = function (Long, Lat, Radius, MasterCatID, cb) {
    getPartnerListFeature.getPartnerListFeature(ds, Long, Lat, Radius, MasterCatID, cb);
  };
  getPartnerListFeature.remoteMethod(Restapi);


  /*
   @mathod getAllMasterCategory
   @description  get all master category
   @param none
  */
  Restapi.getAllMasterCategory = function (cb) {
    getMasterCategory.getAllMasterCategory(ds, cb);
  };
  getMasterCategory.remoteMethod(Restapi);


  /*
   @mathod getCity
   @description  get city data
   @param none
  */
  Restapi.getCity = function (cb) {
    getCity.getCity(ds, cb);
  };
  getCity.remoteMethod(Restapi);


  /*
   @mathod getMemberShipDetails
   @description  get member ship details
   @param {integer} membership
  */
  Restapi.getMemberShipDetails = function (membership, cb) {
    getMemberShipDetails.getMemberShipDetails(ds, membership, cb);
  };
  getMemberShipDetails.remoteMethod(Restapi);


  /*
 @mathod getPartnerDetails
 @description  get partner details
 @param partnerID
*/
  Restapi.getPartnerDetails = function (partnerID, cb) {
    getPartnerDetails.getPartnerDetails(ds, partnerID, cb);
  };
  getPartnerDetails.remoteMethod(Restapi);

  /*
 @mathod getPartnerRefined
 @description  get partner refined
 @param Long,Lat,MasterCat,FilterString
*/
  Restapi.getPartnerRefined = function (Long, Lat, MasterCat, FilterString, Radius, cb) {
    getPartnerRefined.getPartnerRefined(ds, Long, Lat, MasterCat, FilterString, Radius, cb);
  };
  getPartnerRefined.remoteMethod(Restapi);

  /*
   @mathod createNewSalesLead
   @description  create new Partner
   @param Firstname,Surname,MobileNo
  */
  Restapi.createNewSalesLead = function (Firstname, Surname, MobileNo, cb) {
    createNewSalesLead.createNewSalesLead(ds, Firstname, Surname, MobileNo, cb);
  };
  createNewSalesLead.remoteMethod(Restapi);


  /*
@mathod memeberOpt
@description  get memeber opt
@param MobileNo
*/
Restapi.memeberOpt = function (MobileNo, cb) {
  memeberOpt.memeberOpt(ds,MobileNo,cb);
};
memeberOpt.remoteMethod(Restapi);

/*
@mathod activeMember
@description  active member
@param MobileNo,OTP
*/
Restapi.activeMember = function (MobileNo,OTP, cb) {
  activeMember.activeMember(ds,MobileNo,OTP,cb);
};
activeMember.remoteMethod(Restapi);

  /*
  @mathod partnerRedeemQuestions
  @description  get partner redeem details
  @param PartnerID
  */
  Restapi.partnerRedeemQuestions = function (PartnerID, cb) {
    partnerRedeemQuestions.partnerRedeemQuestions(ds,PartnerID,cb);
  };
  partnerRedeemQuestions.remoteMethod(Restapi);

  /*
@mathod getSubCategory
@description  get subCategory by master id
@param MasterCatId
*/
  Restapi.getSubCategory = function (MasterCatId, cb) {
    getSubCategory.getSubCategory(ds,MasterCatId,cb);
  };
  getSubCategory.remoteMethod(Restapi);

  /*
@mathod partnerRedeemWrite
@description  write partner redeem
@param MemberID,PartnerID,QuestionID,AnswerValue,CorrectAnswer
*/
  Restapi.partnerRedeemWrite = function (MemberID,PartnerID,QuestionID,AnswerValue,CorrectAnswer, cb) {
    partnerRedeemWrite.partnerRedeemWrite(ds,MemberID,PartnerID,QuestionID,AnswerValue,CorrectAnswer,cb);
  };
  partnerRedeemWrite.remoteMethod(Restapi);
  /*
@mathod partnerRedeemWrite
@description  write partner redeem
@param MemberID,PartnerID,QuestionID,AnswerValue,CorrectAnswer
*/
  Restapi.Log = function (CustomerID,ClientOsName,ClientModel,ClientOSVersion,ClientManufacturer,Long,Lat,cb) {
    Log.Log(ds,CustomerID,ClientOsName,ClientModel,ClientOSVersion,ClientManufacturer,Long,Lat,cb);
  };
  Log.remoteMethod(Restapi);
};



