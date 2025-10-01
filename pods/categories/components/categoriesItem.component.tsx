import { colors, typography } from "@/global_css/theme";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Category } from "../model";

interface CategoriesItemComponentProps {
	category: Category;
}

export const CategoriesItemComponent: React.FC<CategoriesItemComponentProps> = (
	props
) => {
	const { category } = props;

	return (
		<View style={styles.container}>
			<Image source={category.image} style={styles.image} />
			<Text style={styles.title}>{category.name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		gap: 16,
		padding: 12,
		backgroundColor: "#FFFFFF",
		marginBottom: 16,
		borderRadius: 16,
		shadowColor: "#000000",
		shadowOpacity: 0.1,
		shadowRadius: 1,
		shadowOffset: { width: 0.25, height: 1 },
	},
	title: {
		fontSize: typography.fontSize.base,
		fontFamily: typography.fontFamily.bold,
		color: colors.text,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 8,
	},
});
