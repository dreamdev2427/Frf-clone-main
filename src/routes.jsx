import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Volts = React.lazy(() => import("./pages/Volts"));

function AppRoutes() {
  return (
    <div>
      <Router>
        <React.Suspense fallback={<>Loading</>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/volts" element={<Volts />}></Route>
          </Routes>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default AppRoutes;
