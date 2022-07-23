import React, { lazy, Suspense, useLayoutEffect } from "react";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// Pages
const Home = lazy(() => import("./pages/landingPage/LandingPage"));
const About = lazy(() => import("../src/pages/aboutPage/AboutPage"));
const PageNotFound = lazy(() => import("../src/pages/404/404"));

function App() {
  useLayoutEffect(() => {
    const cursor = document.getElementById("cursor");
    const cursorPoint = document.getElementById("cursor-point");

    document.body.addEventListener("mousemove", function (e) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      cursorPoint.style.left = e.clientX + "px";
      cursorPoint.style.top = e.clientY + "px";
    });
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div id="cursor" className="cursor whole-cursor" />
      <div id="cursor-point" className="cursor-point whole-cursor" />

      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
