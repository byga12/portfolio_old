import Navigation from "./components/Navigation/Navigation";
import {Router, Route} from 'wouter';

//PAGES
import About from './pages/About'

function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/about" component={About}/>
    </Router>
  );
}

export default App;
