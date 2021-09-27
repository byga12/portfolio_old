import {Router, Route} from 'wouter';

//COMPONENTS
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer"
//PAGES
import About from './pages/About/About'
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Footer/>
    </Router>
  );
}

export default App;
