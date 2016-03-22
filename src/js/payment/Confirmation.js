/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var React = require('react');
var Link = require('react-router').Link;
var paymentAction = require('paymentAction');
var paymentStore = require('paymentStore');

var Confirmation = React.createClass({

    setPaymentState : function(){
        paymentAction.setPaymentState(3);
    },
    
    render(){  
        return (   
         <div>
         <p> Are you sure you want to pay : 25$ with credit card ************7849</p>
         <p>Due on (04/22/2016)  </p>   
         <div>Click here to Confirm Payment <Link to="/payment/receipt" onClick={this.setPaymentState} > 
         <input type="submit" value="Confirm Submit" /> </Link></div>
         </div>        
         );
    }
});

module.exports = Confirmation;

