import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import PageNotFound from "./Components/PageNotFound";
import SearchBox from "./Components/SearchBox";
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Layout>
                <SearchBox />
                <HomePage />
              </Layout>
            </>
          }
        />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
