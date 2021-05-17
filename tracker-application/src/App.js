import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/NavbarComponent';
import { Route,Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Switch>
       <Route path="/login" component={Login} />
       <Route path="/register" component={Register} />
     </Switch>
    </div>
  );
}

export default App;
