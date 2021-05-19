import React, { useEffect,useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/NavbarComponent";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import fire from "./firebase";
import UserContext from "./context/UserContext";
import Main from "./components/Main/Main";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fire.auth().onAuthStateChanged(setUser);
  }, []);

  const authUser = {
    isAuthenticated: Boolean(user),
    username: user?.email,
    id: user?.uid,
  };
  console.log(authUser);
  console.log(user);

  return (
    <div className="App">
      <UserContext.Provider value={authUser}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/main" component={Main} />
          <Route
            path="/logout"
            render={() => {
              fire.auth().signOut();
              return <Redirect to="/" />;
            }}
          />
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
