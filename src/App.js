import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useIntersection } from "react-use";

function App() {
  return (
    <div className='App'>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
