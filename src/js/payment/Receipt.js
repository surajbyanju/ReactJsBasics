/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var React = require('react');
var Link = require('react-router').Link;
var paymentAction = require('paymentAction');
var paymentStore = require('paymentStore');

var Receipt = React.createClass({
   
    render(){  
        return (   
         <div>
        <p>Thank you for your payment for : 25$ with credit card ************7849</p>
         <p>Due on (04/22/2016)  </p>   
         <div>Shortly you will recive an e-mail with the receipt. </div>
        <div className="note">Note: Please keep that for record:. </div>
         </div>        
         );
    }
});

module.exports = Receipt;

