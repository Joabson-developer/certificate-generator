import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { Certificate, Home } from "./pages";

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/certificate" element={<Certificate />} />
      </Switch>
    </Router>
  );
}
