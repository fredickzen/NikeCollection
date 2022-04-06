import Layout from "../components/layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@pages/home";
import ProductDetail from "@pages/productDetail";

const GlobalRoutes = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<ProductDetail />} path="product/:id" />
                </Routes>
            </Layout>
        </Router>
    );
};

export default GlobalRoutes;
