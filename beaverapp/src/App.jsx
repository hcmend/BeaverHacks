import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<PageOne />} />
            <Route path="/two" element={<PageTwo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
