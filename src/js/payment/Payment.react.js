/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var React = require('react');
var Link = require('react-router').Link;
var paymentStore = require('paymentStore');

var Payment = React.createClass({
     
     getInitialState:function(){
        return {
            paymentState:paymentStore.getPaymentState()
        }
    },
    
    componentWillMount: function(){
        

        paymentStore.addChangeListener(this._onChange);
        
        

  },
 
   _onChange: function(){      
    this.setState({
      paymentState: paymentStore.getPaymentState()       
        });
  },

    render(){
        
        return (   
         <div id="payment-ul">Welcome To payment Center <br/>
                    <Link to="/payment/amountdisplay" className="">Amount</Link> --) &nbsp; &nbsp;  
                    <Link to="/payment/paymentmethod" className={this.state.paymentState <1 ? 'disable-link' : ''}>Payment Method</Link> --) &nbsp; &nbsp;   
                    <Link to="/payment/confirmation" className={this.state.paymentState <2 ? 'disable-link' : ''}>Confirmation</Link> --) &nbsp; &nbsp;  
                   <Link to="/payment/receipt" className={this.state.paymentState <3 ? 'disable-link' : ''}>Receipt</Link>  
           {this.props.children}
         </div>          
         );
    }
});

module.exports = Payment;

