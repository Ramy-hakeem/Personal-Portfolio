import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import WelcomeScreen from "./components/WelcomeScreen";
import Navbar from "./components/Navbar";
import PageWrapper from "./components/PageWrapper";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <WelcomeScreen key="loader" onFinished={() => setIsLoading(false)} />
        ) : (
          <div className="bg-[#0f021a] min-h-screen relative overflow-hidden">
            <CustomCursor />
            <Navbar />

            {/* Crucial: mode="wait" ensures old page exits before new one enters */}
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route
                  path="/"
                  element={
                    <PageWrapper>
                      <Home />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <PageWrapper>
                      <About />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/projects"
                  element={
                    <PageWrapper>
                      <Projects />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <PageWrapper>
                      <Contact />
                    </PageWrapper>
                  }
                />
              </Routes>
            </AnimatePresence>

            <Footer />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
