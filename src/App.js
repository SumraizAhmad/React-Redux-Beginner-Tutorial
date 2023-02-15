import "./App.css";
import Header from "./Containers/Header";
import { Routes, Route, Navigate } from "react-router-dom";

import ProductListing from "./Containers/ProductList";
import ProductDetail from "./Containers/ProductDetail";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<ProductListing />} />
        <Route path="/product/:productId" exact element={<ProductDetail />} />
        <Route>404 not found!</Route>
      </Routes>
    </div>
  );
}

export default App;
