
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import CartPageContainer from './contaniers/CartPageContainer';
import HomePageContainer from './contaniers/HomePageContainer';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/cart">
          <CartPageContainer />
        </Route>
        <Route path="/">
          <HomePageContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
