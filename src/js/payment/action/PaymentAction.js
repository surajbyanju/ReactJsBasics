/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var PaymentDispatcher = require('../dispatcher/PaymentDispatcher');
var appConstants = require('../constants/PaymentConstants');

var paymentAction = {
  setPaymentState: function(item){
    PaymentDispatcher.handleAction({
      actionType: appConstants.SET_PAYMENT_STATE,
      data: item
    });
  }
  };
  
 module.exports = paymentAction;


