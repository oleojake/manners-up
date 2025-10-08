import { colors, typography } from "@/global_css/theme";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import { Category } from "../model";

interface CategoriesItemComponentProps {
	category: Category;
}

export const CategoriesItemComponent: React.FC<CategoriesItemComponentProps> = (
	props
) => {
	const { category } = props;

	const handlePress = () => {
		router.push(`/category-detail?id=${category.id}`);
	};

	return (
		<Pressable
			style={({ pressed }) => [styles.container, pressed && styles.pressed]}
			onPress={handlePress}
		>
			<Image source={category.image} style={styles.image} />
			<Text style={styles.title}>{category.name}</Text>
		</Pressable>
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
	pressed: {
		opacity: 0.8,
		transform: [{ scale: 0.98 }],
	},
});
