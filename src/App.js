import React, { useEffect } from "react";
import "./App.css";
import Header from "./MyComponents/Header";
import Home from "./MyComponents/Home";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Checkout from "./MyComponents/Checkout";
import Login from "./MyComponents/Login";
import { auth } from "./MyComponents/firebase";
import { useStateValue } from "./MyComponents/StateProvider";
import Payment from "./MyComponents/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./MyComponents/Orders";


const promise = loadStripe("pk_test_51JLkCoSCKMlszvE8wY24a9kSQeqwkClUlmOIQFWf2DqnW7NGLfQqwdj0kM6Ohnbe1D4c7gISTd7l98fIEsY3Rvow00EalbQ90X"); 

function App() {
  const [{}, dispatch]= useStateValue();

  useEffect( () => {
    //will only runs once when the app components loads... & if on bracket if theres something if run multiple times whenever changes are made.

    auth.onAuthStateChanged(authUser => {
      console.log('The USER IS >>>>', authUser);

      if(authUser) {
        //the user just logged in / the user was already logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }
      else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        

        <Switch>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
