/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var React = require('react');
var Header = require('Header');
var Nav = require('Nav');
var Content = require('Content');
var Footer = require('Footer');
var Router = require('react-router');
 
require('Container.css');
var Container = React.createClass({
 
    render: function() {
        return (
            <div>
                <Header/>
                <Nav/>
                <Content/>
                <Footer/>
            </div>
        );
    }
});
 
module.exports = Container;