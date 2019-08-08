import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../components/Layout";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/badges" component={Badges} />
            <Route exact path="/badges/new" component={BadgeNew} />
          </Switch>
        </Layout>
      </BrowserRouter>  
    );
  }
}

export default App;
