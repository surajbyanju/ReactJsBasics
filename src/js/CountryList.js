/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var React = require('react');
var ShowCountryList = require('ShowCountryList');

var CountryList = React.createClass({
    
    getInitialState : function(){
        return ({countries:[]});     
    },
        
    listCountries: function(){
        var self = this;
                  $.ajax("http://services.groupkt.com/country/get/all").done(function(data){
                    self.setState({
                    countries: data.RestResponse.result,                  
                    });
                  });
              },


    render: function(){     
        return(             
        <div>Click here to see list of Countries: <button onClick={this.listCountries}>Countries</button>   <ShowCountryList country={this.state.countries}/> </div>
       );
    }
});

module.exports=CountryList;