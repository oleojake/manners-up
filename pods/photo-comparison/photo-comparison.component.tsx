import { theme } from "@/global_css";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface PhotoComparisonComponentProps {
	referenceImageSource: any;
	referenceImageTitle: string;
	currentPhotoUri: string | null;
	onTakePhoto: () => void;
}

export const PhotoComparisonComponent: React.FC<
	PhotoComparisonComponentProps
> = ({
	referenceImageSource,
	referenceImageTitle,
	currentPhotoUri,
	onTakePhoto,
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.sectionTitle}>Reference: {referenceImageTitle}</Text>
				<View style={styles.imageContainer}>
					{referenceImageSource ? (
						<Image source={referenceImageSource} style={styles.photo} />
					) : (
						<Text style={styles.placeholderText}>Loading reference image...</Text>
					)}
				</View>

				<Text style={styles.sectionTitle}>Your Photo</Text>
				<View style={styles.imageContainer}>
					{currentPhotoUri ? (
						<Image source={{ uri: currentPhotoUri }} style={styles.photo} />
					) : (
						<Text style={styles.placeholderText}>No photo taken yet</Text>
					)}
				</View>
			</View>

			<View style={styles.buttons}>
				<TouchableOpacity style={styles.takePhotoButton} onPress={onTakePhoto}>
					<Ionicons name="camera" size={20} color="white" />
					<Text style={styles.takePhotoButtonText}>
						{currentPhotoUri ? "Retake Photo" : "Take Photo"}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
		paddingTop: 20,
	},
	content: {
		flex: 1,
		paddingHorizontal: 20,
	},
	sectionTitle: {
		fontSize: 16,
		fontWeight: "600",
		color: theme.colors.text,
		marginTop: 20,
		marginBottom: 10,
	},
	imageContainer: {
		height: 200,
		backgroundColor: theme.colors.background,
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 20,
	},
	photo: {
		width: "100%",
		height: "100%",
		borderRadius: 8,
	},
	placeholderText: {
		color: theme.colors.textSecondary,
		fontSize: 14,
	},
	buttons: {
		paddingHorizontal: 20,
		paddingBottom: 40,
	},
	takePhotoButton: {
		backgroundColor: theme.colors.accent,
		paddingVertical: 12,
		borderRadius: 8,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
		gap: 8,
	},
	takePhotoButtonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "600",
	},
});
