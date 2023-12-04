import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";

import Home from "./components/Home";
import Dbrecord from "./components/DB";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/psets-database" element={<Dbrecord />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
