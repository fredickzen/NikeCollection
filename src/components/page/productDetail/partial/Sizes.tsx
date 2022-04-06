interface ISizes {
  sizes: number[];
  sizeSelected: number | null | undefined;
  setSizeSelected: (size: number | null | undefined) => any;
}

const Sizes = (props: ISizes) => {
  return (
    <div className="d-flex flex-column">
      <b>Size</b>
      {props.sizes.map((s) => (
        <button
          key={s}
          className={`button button-sm mb-3 ${props.sizeSelected === s ? "button-dark" : ""
            }`}
          onClick={() => props.setSizeSelected(s)}
        >
          {s}
        </button>
      ))}
    </div>
  );
};
export default Sizes;
