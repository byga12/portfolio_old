import { Router, Route } from "wouter";

//COMPONENTS
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
//PAGES
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Footer />
    </Router>
  );
}

export default App;
