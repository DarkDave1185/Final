import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* Page Imports */
import Landing from "./pages/Landing";
import About from "./pages/About";

import Contact from "./pages/Contact";
import Store from "./pages/Store";
// Components Imports //
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Navbar />
          <Route exact path="/" component={Landing}>
            <h3>Landing Page</h3>
            <Landing />
          </Route>
          <Route path="/about" component={About}>
            <h3>About Page</h3>
            <Header />
            <About />
          </Route>
          {/* <Route path="/gps" component={Gps}>
            <h3>GPS Page</h3>
          </Route> */}
          <Route path="/contact" component={Contact}>
            <h3>Contact Page</h3>
          </Route>
          <Switch>
            <Route path="/store" component={Store}>
              <h3>Store Page</h3>
              <Store />
            </Route>
            <Route path="/store/checkout" component={Store}>
              <h3>Checkout Page</h3>
            </Route>
            <Route path="/store/cart" component={Store}>
              <h3>Cart Page</h3>
            </Route>
            <Route path="/store/summary" component={Store}>
              <h3>Cart Summary Page</h3>
            </Route>
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
