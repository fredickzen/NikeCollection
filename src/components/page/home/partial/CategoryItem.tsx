import { ProductCategorySelectAction } from "@redux/actions/ProductsAction";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { useMemo } from "react";

interface ICategoryItem {
  categorie: string;
}

const CategoryItem = (props: ICategoryItem) => {
  const dispatch = useAppDispatch();

  const { list, categorySelected } = useAppSelector((store) => store.products);

  const isSelected = useMemo<boolean>(
    () => categorySelected === props.categorie,
    [categorySelected, props]
  );

  const SelectCategory = () => {
    dispatch(ProductCategorySelectAction(props.categorie));
  };

  return (
    <div
      className={`categories ${isSelected ? "active" : ""} m-2`}
      onClick={SelectCategory}
    >
      <h1 className="title">{props.categorie}</h1>
      <span className="quantity">
        {list?.filter((p) => p.category === props.categorie).length} items
      </span>
    </div>
  );
};

export default CategoryItem;
