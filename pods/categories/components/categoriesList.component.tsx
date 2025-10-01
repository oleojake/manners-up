import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Category } from "../model";
import { CategoriesItemComponent } from "./categoriesItem.component";

interface CategoriesListComponentProps {
	categories: Category[];
}

export const CategoriesListComponent: React.FC<CategoriesListComponentProps> = (
	props
) => {
	const { categories } = props;

	return (
		<FlatList
			data={categories}
			renderItem={({ item }) => <CategoriesItemComponent category={item} />}
			keyExtractor={(item) => item.id}
			style={styles.container}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 4,
	},
});
