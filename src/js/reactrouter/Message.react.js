/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
  
var React = require('react');
var Message = React.createClass({
    
    render : function(){
        
       return <h3>Message {this.props.params.id}</h3>
    }
})

module.exports=Message;
