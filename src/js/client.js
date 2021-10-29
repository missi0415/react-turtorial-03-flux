import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

const app = document.getElementById('app');

ReactDOM.render(
  <Router>
    <Layout>
      <Route exact path="/" component={Todos}></Route>
      <Route path="/favorites" component={Favorites}></Route>
      <Route path="/settings" component={Settings}></Route>
    </Layout>
  </Router>,
app);