import React, { lazy, Suspense, useLayoutEffect } from "react";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// Pages
const Home = lazy(() => import("./pages/landingPage/LandingPage"));

function App() {
  useLayoutEffect(() => {
    const cursor = document.getElementById("cursor");
    const cursorWrapper = document.getElementById("cursor-wrapper");

    document.body.addEventListener("mousemove", function (e) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      cursorWrapper.style.left = e.clientX + "px";
      cursorWrapper.style.top = e.clientY + "px";
    });
  });

  return (
    <>
      <div id="cursor" className="cursor whole-cursor" />
      <div id="cursor-wrapper" className="cursor-wrapper whole-cursor" />

      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="*" element={<div>404 Not found</div>} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
