import React ,{useState, createContext} from 'react';
import './App.css';
// import Header from './components/Header/Header';
import Food from './components/Food/Food';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Breakfast from './components/Breakfast/Breakfast';
import Dinner from './components/Dinner/Dinner';
import Header from './components/Header/Header';
import MenuItemDetails from './components/MenuItemDetails/MenuItemDetails';
import MHeader from './components/MHeader/MHeader';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import SSinglePlaceOrder from './components/SSinglePlaceOrder/SSinglePlaceOrder';

export const cartContext = createContext();

function App() {
  const [cart,setCart] = useState([]);
  
  console.log("palloan",cart);

  return (
    <cartContext.Provider value={[cart, setCart]}>
    <div className="App">
      <MHeader></MHeader>
      <Router>
        <Switch>
          <Route exact path="/lunch">
            <Food></Food>
          </Route>
          <Route path="/breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>
          <Route exact path="/">
            <Food></Food>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/place">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="/single">
              <SSinglePlaceOrder></SSinglePlaceOrder>
          </Route>
          
          <Route path="/:foodsId">
            <MenuItemDetails></MenuItemDetails>
          </Route>
        </Switch>
      </Router>
    </div>
    </cartContext.Provider>
  );
}

export default App;
