import Carrito from "@svg/carrito.svg";

const AddtoCart = () => {
    return <div className="product-detail-add-to-cart">
        <div className="text-center">
            Swipe down
        </div>
        <div className="d-flex justify-content-center">

            <div className="swipe-down-button">
                <button className="button button-round button-sm ">
                    <img src={Carrito} alt="Carrito" className="button-icon" />
                </button>
                <div className="down-arrows">
                    
                </div>
            </div>
        </div>
    </div>
}
export default AddtoCart;