import { theme } from "@/global_css";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const CategoriesComponent = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Categories</Text>
		</View>
	);
};

const { colors, typography } = theme;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.background,
	},
	title: {
		fontSize: typography.fontSize["3xl"],
		fontFamily: typography.fontFamily.bold,
		color: colors.text,
	},
});
