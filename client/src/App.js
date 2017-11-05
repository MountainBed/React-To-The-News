import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";

const App = () =>
  <Router>
    <div>
      <Navbar />
      <div>
        <div>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </div>
      </div>
    </div>
  </Router>;

export default App;
