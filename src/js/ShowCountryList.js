/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var React = require('react');
var CountryDetails = require('CountryDetail')

var ShowCountryList = React.createClass({
    
    getInitialState : function(){
        return{
            value : 'select',
            country: {},
        }
    },
    countryDetail: function(event){
         var selectedValue = event.target.value;
         var self = this;
                  $.ajax("http://services.groupkt.com/country/get/iso3code/"+selectedValue).done(function(data){
                    self.setState({
                    country: data.RestResponse.result, 
                    value: selectedValue
                    });
                  });
    },
     render: function () {
         if (this.props.country.length >0) {
                   return (      
           <div><select name ="countrySelect" onChange={this.countryDetail} value={this.state.value}>
           <option name ="select"> -- Select --</option>
            {         
                    this.props.country.map(function(country) {
                      return <option value={country.alpha3_code}> {country.name}</option>
                    })
        }
        
                </select>
                
                <CountryDetails country={this.state.country}/>
        
                </div>
          )
        }else{
            return null;
        }

        }
    
});

module.exports=ShowCountryList;