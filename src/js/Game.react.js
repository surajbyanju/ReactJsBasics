/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var React = require('react');
var CountryList = require('CountryList');
 
var Game = React.createClass({
    
    getInitialState : function(){
        return { textValue :""};
    },
    
    changeMethod : function(event){    
        var value = event.target.value;
        this.setState({
            textValue :value
        });
    },
 
    render: function() {
        return (
               <article>
                <input type ="text" placeholder="Type on me" onChange={this.changeMethod}/> The text you are typing is: {this.state.textValue}
               <CountryList/>
              </article>);
       
    }
});
 
module.exports = Game;
    