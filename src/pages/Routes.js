import * as React from 'react';
import {
  Routes as BrowseRoutes,
  BrowserRouter,
  Route,
} from "react-router-dom";

import { Home } from './Home/Home'

function Routes() {
  return (
    <BrowserRouter>
      <BrowseRoutes>
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Home />} />
      </BrowseRoutes>
    </BrowserRouter>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default Routes;