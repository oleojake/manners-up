import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { fetchCategoryDetail } from "./api";
import { CategoryDetailComponent } from "./category-detail.component";
import { CategoryDetail } from "./model";

export const CategoryDetailContainer: React.FC = () => {
	const { id } = useLocalSearchParams<{ id: string }>();
	const [categoryDetail, setCategoryDetail] = useState<CategoryDetail>({
		id: "",
		title: "",
		content: [],
	});

	useEffect(() => {
		if (id) {
			fetchCategoryDetail(id).then((data) => {
				setCategoryDetail(data);
			});
		}
	}, [id]);

	return <CategoryDetailComponent categoryDetail={categoryDetail} />;
};
