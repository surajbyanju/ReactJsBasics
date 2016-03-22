/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var React = require('react');
var Link = require('react-router').Link;
var Inbox = React.createClass({
    
    render : function(){
        return (
        <div>
        <h2>Inbox</h2> "Welcome to your Inbox" 
                <Link to="/inbox/messages/10">Messages</Link>
        {this.props.children}
      </div>
      )
    }
})

module.exports=Inbox;
