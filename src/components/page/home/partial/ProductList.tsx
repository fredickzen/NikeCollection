import { useAppSelector } from "@redux/hooks";
import ProductItem from "./ProductItem";

const ProductList = () => {
    const { list, categorySelected } = useAppSelector((store) => store.products);
    return (
        <div className="products-container container invisible-scroll">
            {list &&
                list
                    .filter((p) => p.category === categorySelected)
                    .map((p) => <ProductItem key={p.id} {...p} />)}
        </div>
    );
};

export default ProductList;
