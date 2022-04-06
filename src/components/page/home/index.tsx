import { EProducts } from "@examples/EProducts";
import { ProductInitAction } from "@redux/actions/ProductsAction";
import { useAppDispatch } from "@redux/hooks";
import { useEffect } from "react";
import BannerSlide from "./partial/BannerSlide";
import Categories from "./partial/Categories";
import PageFooter from "./partial/PageFooter";
import ProductList from "./partial/ProductList";

const Index = () => {

    const distpatch = useAppDispatch();

    const LoadInitData = () => {
        const productos = EProducts;
        distpatch(ProductInitAction(productos));

    }
    useEffect(() => {
        LoadInitData();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="main">
                <div className="container">

                    <h1>New Collection</h1>
                    <h6 className="text-sub">Nike Original 2022</h6>
                </div>
                <BannerSlide />
                <div className="mb-5">
                    <Categories />
                    <ProductList />
                </div>
            </div>
            <PageFooter />
        </>
    );
};

export default Index;
