import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import {HelmetProvider} from "react-helmet-async";

function App() {
  return (
    <div>
      <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/about" element = {<About />}/>
          <Route path = "/products" element = {<Products />} />
        </Routes>
      </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
