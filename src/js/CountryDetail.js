/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var React = require('react');

var CountryDetails = React.createClass({
     render: function(){ 
         if(!this.props.country.name){
             return null;
         }
      else{
        return(  
                <div>
                    <table border="1">
                        <tr>
                            <th>Name</th>
                            <th>Alpha 2 Code</th>
                            <th>Alpha 3 Code</th>
                         </tr>

                         <tr>
                            <td>{this.props.country.name}</td>
                            <td>{this.props.country.alpha2_code}</td>
                            <td>{this.props.country.alpha3_code}</td>
                         </tr>

                     </table>
                 </div>
       );
    }
    }
    
});
  
module.exports=CountryDetails;
