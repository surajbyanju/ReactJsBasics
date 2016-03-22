/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var React = require('react');
 
var Footer = React.createClass({
 
    render: function() {
           return (     
                <div id= "footer">CopyRight(c) <a href="https://facebook.com" target="_blank">Facebook.com</a>
                <p>Posted by: Suraj Byanju</p>
                    <p>Contact information: <a href="mailto:suraj.byanju@gmail.com">
                    someone@example.com</a>.</p>
                </div>
        );
    }
});
 
module.exports = Footer;

