import { theme } from "@/global_css";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const HomeComponent = () => {
	return (
		<View style={styles.container}>
			<Ionicons
				name="restaurant"
				size={64}
				style={styles.icon}
				color={colors.accent}
			/>
			<Text style={styles.title}>Manner-Up</Text>
			<Text style={styles.subtitle}>Master the art of protocol</Text>
			<Text style={styles.paragraph}>
				Elevate your social skills, learn how to make a lasting good impression
			</Text>
			<Pressable
				style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
				onPress={() => router.replace("/categories")}
			>
				<Text style={styles.buttonText}>Get Started</Text>
			</Pressable>
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
	icon: {
		marginBottom: 28,
	},
	title: {
		fontSize: typography.fontSize["4xl"],
		fontFamily: typography.fontFamily.extraBold,
	},
	subtitle: {
		fontSize: typography.fontSize.lg,
		fontFamily: typography.fontFamily.medium,
		color: colors.textSecondary,
		marginBottom: 32,
	},
	paragraph: {
		fontSize: typography.fontSize.sm,
		fontFamily: typography.fontFamily.regular,
		color: colors.textSecondary,
		textAlign: "center",
		maxWidth: "80%",
	},
	button: {
		marginTop: 20,
		backgroundColor: colors.accent,
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 8,
		width: "80%",
		alignItems: "center",
	},
	buttonPressed: {
		backgroundColor: colors.accentDark,
		opacity: 0.9,
	},
	buttonText: {
		color: "#FFFFFF",
		fontSize: typography.fontSize.base,
		fontFamily: typography.fontFamily.semiBold,
	},
});
