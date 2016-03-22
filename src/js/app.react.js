
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var IndexRoute = require('react-router').IndexRoute;
var About = require('About');
var Inbox = require('Inbox');
var Header = require('Header');
var Home = require('Home');
var AmountDisplay = require('AmountDisplay');
var Payment = require('Payment');
var PaymentMethod = require('PaymentMethod');
var Message = require('Message');
var Header = require('Header');
var Game = require('Game');
var Confirmation = require('Confirmation');
var Receipt = require('Receipt');
var Footer = require('Footer');
require('Container.css');

var App = React.createClass({
  render: function () {
       return (
      <div>
        <h1>Welcome to React.JS</h1>
<Header/>
         <div id="content"> 
        {this.props.children}
        </div>
<Footer/>
      </div>
    )
  }
});


var routes = (
     <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="payment" component={Payment} >
      <IndexRoute component={AmountDisplay}/>
             <Route path="amountdisplay" component={AmountDisplay} />
             <Route path="paymentmethod" component={PaymentMethod} />
             <Route path="confirmation" component={Confirmation} />
             <Route path="receipt" component={Receipt} />
      </Route>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} >
            <Route path="messages/:id" component={Message} />
      </Route>
      <Route path="game" component={Game}/>
    </Route>
);

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
React.render((
  <Router history={hashHistory}>
  {routes}
  </Router>
), document.body)