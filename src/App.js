import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  "pk_test_51IDo50JZI69RepBVTc4RFIDlnPej3BllKjbPamSZgjlZHagmUOxI5Zd33wRjGqSer4DzKwM0hnBg0R4t7jPc4GL600tGoFLdKi"
);

function App() {
  const [{ user },dispatch] = useStateValue();

  useEffect(() => {
    //firebase db check user
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    }
  }, []);


  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/orders">
            <Header/>
              <Orders />
          </Route>

          <Route path="/login">
              <Login />
          </Route>

          <Route path="/checkout">
            <Header/>
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
              <Header/>
              <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
