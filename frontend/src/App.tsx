import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './Home'

function App() {
  return (
    <Router>
      <Routes>
        {/* ville作成ページ*/}
        <Route
          path="/home"
          element={<Home />}
        />
      </Routes>
    </Router>
  );
}

export default App;