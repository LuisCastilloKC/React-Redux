import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route> 404 Not Found!</Route>
      </Routes>
    </div>
  );
}

export default App;
