/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var PaymentDispatcher = require('PaymentDispatcher');
var appConstants = require('PaymentConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  paymentStateValue: 0
};

var setPaymentState = function(item){
  _store.paymentStateValue=item;
};

var paymentStore = objectAssign({}, EventEmitter.prototype, {

addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  
  getPaymentState: function(){
    return _store.paymentStateValue;
  }
});

PaymentDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case appConstants.SET_PAYMENT_STATE:
      setPaymentState(action.data);
      paymentStore.emit(CHANGE_EVENT);
      break;  
    default:
      return true;
  }
});

module.exports = paymentStore;

