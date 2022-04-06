import Logo from "@svg/Logo_NIKE.svg";
import Carrito from "@svg/carrito.svg";
import Flecha from "@svg/flecha.svg";
import Hambuerguesa from "@svg/hamburgesa1.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  let navigate = useNavigate();

  const GoBack = () => {
    navigate(-1);
  };

  return (
    <div className=" container d-flex justify-content-between mt-4">
      <div>
        {location.pathname === "/" || location.pathname === "/home" ? (
          <button className="button button-sm">
            <img src={Hambuerguesa} alt="Hamburguesa" className="button-icon" />
          </button>
        ) : (
          <button className="button button-sm">
            <img
              src={Flecha}
              onClick={GoBack}
              alt="Flecha"
              className="button-icon reverse"
            />
          </button>
        )}
      </div>
      <div>
        <img className="nike-logo" src={Logo} alt="Logo" />
      </div>
      <div>
        <button className="button button-sm">
          <img src={Carrito} alt="Carrito" className="button-icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
