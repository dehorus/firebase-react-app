import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Admin from "./components/Admin";
import Login from "./components/Login";

function App() {
  return (
    <> 
        <Router>
        <Nav />
            <Switch>
              <Route path='/' exact component={Home} ></Route>
              <Route path='/admin' component={Admin} ></Route>
              <Route path='/login' component={Login} ></Route>
            </Switch>
        </Router> 
    </>
  )
}

export default App;
