import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "pages/HomePage";
import OverviewPage from "pages/OverviewPage";

export default () => {
  return (
    <Switch>
      <Route component={HomePage} path="/" exact />
      <Route component={OverviewPage} path="/all" exact />
    </Switch>
  );
};
