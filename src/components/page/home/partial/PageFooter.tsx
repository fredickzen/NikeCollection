import Home from "@svg/home.svg";
import Lupa from "@svg/lupa.svg";
import Corazon from "@svg/corazon.svg";

const PageFooter = () => {
    return (
        <div className="page-footer">
            <div className="d-flex justify-content-around  m-5 mt-4">
                <img src={Home} alt="Home" />
                <button className="button button-round btn-search">
                    <img src={Lupa} alt="Lupa" />
                </button>
                <img src={Corazon} alt="Corazon" />
            </div>
        </div>
    );
};
export default PageFooter;
