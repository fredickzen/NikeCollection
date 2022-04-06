import { ProductCategorySelectAction } from "@redux/actions/ProductsAction";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { useEffect } from "react";
import { useState } from "react";
import CategoryItem from "./CategoryItem";

const Categories = () => {
    const dispatch = useAppDispatch();
    const { list } = useAppSelector((store) => store.products);

    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const productCategories = list?.map((p) => p.category) ?? [];
        const uniqueCategories: string[] = [...new Set(productCategories)];
        setCategories(uniqueCategories);
        if(uniqueCategories.length > 0){

            dispatch(ProductCategorySelectAction(uniqueCategories[0]))
        }
    }, [list, dispatch]);
    

    return (
        <div className="categories-container container invisible-scroll">
            {categories.map((c) => (
                <CategoryItem key={c} categorie={c}/>
            ))}
        </div>
    );
};
export default Categories;
