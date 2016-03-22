/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var React = require('react');
var Link = require('react-router').Link;
var paymentAction = require('paymentAction');
var paymentStore = require('paymentStore');

var AmountDisplay = React.createClass({

    setPaymentState : function(){
        paymentAction.setPaymentState(1);
    },
    
    render(){  
        return (   
         <div>
         <p> Your Amount due is : 25$</p>
         <p>Due Date (04/22/2016)  </p>   
         <div>Click here to Submit Payment <Link to="/payment/paymentmethod" onClick={this.setPaymentState} > 
         <input type="submit" value="Pay Now" /> </Link></div>
         </div>        
         );
    }
});

module.exports = AmountDisplay;

