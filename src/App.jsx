import React from "react";
/*import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Minimal Router App</h1>

           <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ margin: "10px" }}>Home</Link>
          <Link to="/about" style={{ margin: "10px" }}>About</Link>
          <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome Home 🚀</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is About section.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>Contact us anytime.</p>
    </div>
  );
}

export default App;*/
/*import BMICalculator from "./components/BMICalculator";
import Aquaholic from "./components/Aquaholic";

function App() {
  return <BMICalculator />;
  return <Aquaholic/>;
}

export default App;*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aquaholic from "./components/Aquaholic";
import AquaDetails from "./components/AquaDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Aquaholic />} />
        <Route path="/aqua/:id" element={<AquaDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
