// Import required libraries
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import MatrixRainBackground from "./components/MatrixRainBackground";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <MatrixRainBackground />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Landing />
            </Layout>
          }
        />
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
