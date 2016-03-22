/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var React = require('react');
var Link = require('react-router').Link;
var Header = React.createClass({
    render: function() {
         return (
            <header>
            <ul class="inline-ul">
               <li><Link to="/">Home</Link></li>
                <li><Link to="/payment">Payment Center</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/inbox">Message Center</Link></li>
               <li><Link to="/game">Free Game</Link></li>
            </ul>
       
            </header>
        );
    }
});
module.exports = Header;