/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Dispatcher = require('flux').Dispatcher;
var PaymentDispatcher = new Dispatcher();

PaymentDispatcher.handleAction = function(action){
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
};

module.exports = PaymentDispatcher;
