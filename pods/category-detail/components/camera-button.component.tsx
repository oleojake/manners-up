import { usePhotoSession } from "@/contexts/photo-session.context";
import { colors, typography } from "@/global_css/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface CameraButtonProps {
	categoryId: string;
	referenceImageId: string;
	referenceImageTitle: string;
}

export const CameraButton: React.FC<CameraButtonProps> = (props) => {
	const { categoryId, referenceImageId, referenceImageTitle } = props;
	const router = useRouter();
	const { actions } = usePhotoSession();

	const handlePress = () => {
		// Guardar la información de la sesión en el Context
		actions.setPhotoSession(categoryId, referenceImageId, referenceImageTitle);
		router.push("/photo-comparison");
	};

	return (
		<Pressable
			style={({ pressed }) => [
				styles.cameraButton,
				pressed && styles.cameraButtonPressed,
			]}
			onPress={handlePress}
		>
			<Ionicons name="camera" size={20} color="white" />
			<Text style={styles.cameraButtonText}>Upload your photo</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	cameraButton: {
		backgroundColor: colors.accent,
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 8,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
	},
	cameraButtonPressed: {
		backgroundColor: colors.accentDark,
		opacity: 0.9,
		transform: [{ scale: 0.98 }],
	},
	cameraButtonText: {
		color: "#FFFFFF",
		fontSize: typography.fontSize.base,
		fontFamily: typography.fontFamily.semiBold,
		marginLeft: 8,
	},
});
