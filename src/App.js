import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import { Provider } from "react-redux";
import store from "./Store/store";
import About from "./Components/About";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div className="box-border flex flex-col justify-between items-stretch h-fit bg-blue-50">
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />}/>
            </Routes>
            <Footer></Footer>
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
