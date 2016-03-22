/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var React = require('react');
var Link = require('react-router').Link;
var paymentAction = require('paymentAction');

var Payment = React.createClass({
        
 setPaymentState : function(){
        paymentAction.setPaymentState(2);
    },
    
    render(){       
        return (   
          <div><p>Please select Payment method type </p>  
                 <p>Click here to Continue with your Payment <Link to="/payment/confirmation" onClick={this.setPaymentState} > 
         <input type="submit" value="Submit Payment" /> </Link></p>
                 </div>  
         );
    }
});

module.exports = Payment;
