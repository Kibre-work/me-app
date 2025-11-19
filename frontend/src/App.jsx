import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div
              className="w-full bg-contain bg-repeat-x"
              style={{ 
                backgroundImage: "url('/images/back.jpg')",
                backgroundSize: "2000px",
                opacity: "1",
              }}
            >
              {/* Optional overlay for better readability */}
         

              {/* All content above overlay */}
              <div className="relative">
                <Header />
                <Home />
                <About />
                <Services />
                <Contact />
                <Footer />
              </div>
            </div>
          }
        />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App;
