import React from 'react';
import './App.css';
import SideBar from "./SideBar"
import Chat from "./Chat"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from "./Login.js"
import { useStateValue } from "./StateProvider"

function App() {
  const [{ user }, dispatch] = useStateValue();


  return (
    <div className="app">

      {!user ? (
        <Login />

      ) : ( 
      <div className = "app__body">
        <Router>
          <SideBar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
            </Route>
          </Switch>
        </Router>
      </div>
      )}
    </div>
  );
}

export default App;
