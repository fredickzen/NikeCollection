import { IProduct } from "@interfaces/models/IProduct";
import { useAppSelector } from "@redux/hooks";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Colors from "./partial/Colors";
import Sizes from "./partial/Sizes";

import Corazon from "@svg/corazon.svg";
import AddtoCart from "./partial/AddToCart";

const Index = () => {
    let { id } = useParams();

    const { list } = useAppSelector((store) => store.products);

    const [product, setProduct] = useState<IProduct | null>();
    const [sizeSelected, setSizeSelected] = useState<number | null>();
    const [colorSelected, setColorSelected] = useState<string | null>();

    useEffect(() => {
        //Simulando una API
        if (id) {
            let idSelected: number = Number(id);

            let selectedProduct = list?.find((d) => d.id === idSelected);
            setProduct(selectedProduct);
        }
    }, [list, id]);

    if (!product) {
        return <>Cargando...</>;
    }
    let { sizes, colors } = product;

    const styleImage: React.CSSProperties = {
        backgroundImage: `url(${require("@img/products/" + product.image)})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "90%",
        backgroundPosition: "50% 40%"
    }

    return (
        <>
            <div className="main">
                <div className="container product-detail-img-container">
                    <div className="text-center">
                        <h1>{product.description}</h1>
                        <span className="text-inactive">
                            {product.gender === "M" ? "Men" : "Women"}'s shoes
                        </span>
                    </div>
                    <div className="product-detail-container mt-2 "
                        style={styleImage}
                    >
                        <div className="product-detail-column">
                            <Sizes {...{ sizes, sizeSelected, setSizeSelected }} />
                            <div className="d-flex justify-content-between">
                                <div className="price">
                                    <b>
                                        $<span className="h1">{product.price}</span> <br />
                                    </b>
                                    <small> <b>Price</b> </small>
                                </div>
                            </div>
                        </div>
                        <div className="product-detail-column">
                            <div>
                                <b>Fav</b>
                                <button className="button button-sm mt-2">
                                    <img src={Corazon} alt="Favorito" className="button-icon" />
                                </button>
                            </div>
                            <Colors  {...{ colors, colorSelected, setColorSelected }} />
                        </div>
                    </div>
                </div>
            </div>
            <AddtoCart />
        </>
    );
};

export default Index;
