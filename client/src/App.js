import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'

import Home from './Components/Home/Home';
import Login from './Components/AuthForms/Login';
import Register from './Components/AuthForms/Register';
import Dashboard from './Components/DashBoard/Dashboard';
import Navigation from './Components/Navbar/Navigation';
import PrivateRoute from './Components/PrivateRoute';
function App() {
  return (
    <div className="App">
      <Router>
       <Navigation/>
       <Switch>
       <Route exact path= "/"  component={ Home } />
       <Route exact path= "/login"  component={ Login } />
       <Route exact path= "/register"  component={ Register } />

       <PrivateRoute path="/dashboard" component= {Dashboard}/>
       </Switch>


      </Router>
     
    </div>
  );
}

export default App;
