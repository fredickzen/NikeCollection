import { IProduct } from "@interfaces/models/IProduct";

const ProductImage = (props: IProduct) => {
    return (
        <div className="product-detail-img-container">
            <img
                className="product-image"
                src={require("@img/products/" + props.image)}
                alt="Product"
            />
        </div>
    );
};
export default ProductImage;
