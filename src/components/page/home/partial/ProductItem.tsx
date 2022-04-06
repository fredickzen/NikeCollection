import { IProduct } from "@interfaces/models/IProduct";
import Flecha from "@svg/flecha.svg";
import { useNavigate } from "react-router-dom";

const ProductItem = (product: IProduct) => {
    const navigate = useNavigate();

    const SelectProduct = () => {
        navigate(`product/${product.id}`);
    };

    return (
        <div className="product-item">
            <div className="product-title-container">{product.description}</div>
            <div className="product-colors">
                {product.colors.map((c) => (
                    <span
                        className="product-color-item"
                        key={c.code}
                        style={{ backgroundColor: c.code }}
                    ></span>
                ))}
            </div>
            <div className="product-image-container">
                <div>
                    <img
                        className="product-image"
                        src={require("@img/products/" + product.image)}
                        alt="Product"
                    />
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <div className="price">
                    <b>
                        $<span className="h5">{product.price}</span> <br />
                    </b>
                    <small>Price</small>
                </div>

                <button className="button button-sm" onClick={SelectProduct}>
                    <img src={Flecha} alt="Flecha" className="button-icon" />
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
