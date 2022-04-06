import { useAppSelector } from "@redux/hooks";
import { useNavigate } from "react-router-dom";
import { Slide } from "react-slideshow-image";

const BannerSlide = () => {
    const { list } = useAppSelector((store) => store.products);

    const navigate = useNavigate();

    const SelectProduct = (id: number) => {
        navigate(`product/${id}`);
    };

    const properties = {
        duration: 15000,
        transitionDuration: 500,
        infinite: true,
        prevArrow: <></>,
        nextArrow: <></>,
        indicators: true,
    };

    if (!list || list.length === 0) {
        return <></>;
    }

    return (
        <div className="container mt-3">
            <Slide {...properties}>
                {list.map((product, index) => (
                    <div key={index} className="banner-slide">
                        <div className="banner-slide-content">
                            <h4>{product.description}</h4>
                            <span className="text-inactive">
                                {product.gender === "M" ? "Men" : "Women"}'s shoes
                            </span>
                            <button
                                className="button button-dark mt-3"
                                onClick={() => SelectProduct(product.id)}
                            >
                                shop now
                            </button>
                        </div>
                        <div className="banner-slide-presentation">
                            <img
                                className="img-main-banner"
                                src={require("@img/products/" + product.image)}
                                alt="Banner"
                            />
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default BannerSlide;
