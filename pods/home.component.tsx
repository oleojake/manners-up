import { theme } from "@/global_css";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const HomeComponent = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Manner-Up</Text>
			<Text style={styles.subtitle}>Master the art of protocol</Text>
		</View>
	);
};

const { colors, typography } = theme;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: typography.fontSize["4xl"],
		fontFamily: typography.fontFamily.extraBold,
	},
	subtitle: {
		fontSize: typography.fontSize.lg,
		fontFamily: typography.fontFamily.regular,
		color: colors.textSecondary,
	},
});
