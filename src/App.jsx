import {Router, Route} from 'wouter';

//COMPONENTS
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer"
//PAGES
import About from './pages/About/About'

function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/about" component={About}/>
      <Footer/>
    </Router>
  );
}

export default App;
