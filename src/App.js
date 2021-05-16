import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import {BrowserRouter as Router,Route,Switch,withRouter} from 'react-router-dom'
import Home from './components/Home'
import List from './components/List'
import Create from './components/Create'
import Update from './components/Update'
import RestaurentHome from './components/RestaurentHome'
import HotelHome from './components/HotelHome'
import HotelList from './components/HotelList'
import HotelCreate from './components/HotelCreate'
import UpdateHotel from './components/UpdateHotel'

function App() {
  return (
    <div className="App">
     <Router>
      <Header />
    
        <Route exact path="/" component={Home} />
        <Route exact path="/restaurents/" render={props=>(<RestaurentHome {...props}/>)} />
        <Route path="/restaurents/list" render={props=>(<List {...props}/>)} />
        <Route path="/restaurents/create" render={props=>(<Create {...props}/>)} />
        <Route path="/restaurents/update/:id" render={props=>(<Update {...props} />)} />
        <Route exact path="/hotels/" render={props=>(<HotelHome {...props}/>)} />
        <Route path="/hotels/list" render={props=>(<HotelList {...props}/>)} />
        <Route path="/hotels/create" render={props=>(<HotelCreate {...props}/>)} />
        <Route path="/hotels/update/:id" render={props=>(<UpdateHotel {...props} />)} />
      
        
        
     
  </Router>
    </div>
  );
}

export default App;
