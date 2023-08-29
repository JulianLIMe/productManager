import { ProductsProvider } from "./contexts/ProductsContext";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ListProducts from "./components/ListProducts";
import SelectedProduct from "./components/SelectedProduct";
import FormCreate from "./components/FormCreate";
import Charts from "./components/Charts";
import "./App.css";

function App() {
  return (
    <ProductsProvider>
      <div className="container_app">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ListProducts />
                <SelectedProduct />
              </>
            }
          />
          <Route path="/create" element={<FormCreate />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
      </div>
    </ProductsProvider>
  );
}

export default App;
