import { theme } from "@/global_css";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CategoriesListComponent } from "./components/categoriesList.component";
import { Category } from "./model";

interface CategoriesComponentProps {
	categories: Category[];
}

export const CategoriesComponent: React.FC<CategoriesComponentProps> = (
	props
) => {
	const { categories } = props;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Categories</Text>
			<CategoriesListComponent categories={categories} />
		</View>
	);
};

const { colors, typography } = theme;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: colors.background,
	},
	title: {
		fontSize: typography.fontSize["2xl"],
		fontFamily: typography.fontFamily.bold,
		color: colors.text,
		marginBottom: 8,
		marginLeft: 4,
	},
});
