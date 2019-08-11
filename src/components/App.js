import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/Home";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import BadgeDetails from "../pages/BadgeDetailsContainer";
import NotFound from "../pages/NotFound";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
          <Route exact path="/" component={Home} />
            <Route exact path="/badges" component={Badges} />
            <Route exact path="/badges/new" component={BadgeNew} />
            <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
            <Route exact path="/badges/:badgeId" component={BadgeDetails} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>  
    );
  }
}

export default App;
