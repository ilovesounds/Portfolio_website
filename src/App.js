import logo from './logo.svg';
import {  HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { AXL8RActivities, Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Photography } from "./components/Photography";
import { Footer } from "./components/Footer";

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Banner />
//       <Skills />
//       <Projects />
//       <Contact />
//       <Footer />
//       <Photography />
//     </div>
//   );
// }

// export default App;
function App() {
  return (
    
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    
  );
}


export default App;