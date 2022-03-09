import './App.css';
import Cardsp, { Cardsprincipal } from './components/cards/Cardsprincipal';
import "./index.css";
import Nav from './components/container/Nav';
import Footer from './components/container/Footer'; 
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
    
      <Nav/>
      <hr />
      {/* <Cardsprincipal/> */}
      <hr />
      <ShoppingCart />
      <hr />
      <Footer/>
    </div>
  );
}

export default App;
