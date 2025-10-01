import React, { useState } from "react";
import { fetchCategories } from "./api/api";
import { CategoriesComponent } from "./categories.component";
import { Category } from "./model";

export const CategoriesContainer: React.FC = () => {
	const [categories, setCategories] = useState<Category[]>([]);

	React.useEffect(() => {
		fetchCategories().then((data) => {
			setCategories(data);
		});
	}, []);

	return <CategoriesComponent categories={categories} />;
};
