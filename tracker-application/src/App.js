import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/NavbarComponent';
import { Redirect,Route,Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Tracker from './components/Tracker/Tracker';
import fire from './firebase';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Switch>
       <Route path="/login" component={Login} />
       <Route path="/register" component={Register} />
       <Route path="/tracker" component={Tracker} />
       <Route path="/logout" render={()=>{
         fire.auth().signOut();
         return <Redirect to="/login" />
       }} />
     </Switch>
    </div>
  );
}

export default App;
