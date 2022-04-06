import { IColor } from "@interfaces/models/IColor";

interface IColors {
    colors: IColor[];
    colorSelected: string | null | undefined;
    setColorSelected: (color: string | null | undefined) => any;
}

const Colors = (props: IColors) => {
    return (
        <div className="d-flex flex-column product-colors">
            {props.colors.map((c) => (
                <button
                    key={c.code}
                    className={`button button-sm mb-3 ${((props.colorSelected === c.code) ? "button-dark": "")}` }
                    onClick={() => props.setColorSelected(c.code)}
                >
                    <span
                        className="product-color-item"
                        style={{ backgroundColor: c.code }}
                    ></span>
                </button>
            ))}
            <b>Color</b>
        </div>
    );
};
export default Colors;
