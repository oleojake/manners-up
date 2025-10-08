import { theme } from "@/global_css";
import { Ionicons } from "@expo/vector-icons";
import { Camera, CameraView } from "expo-camera";
import React, { useRef, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CameraComponentProps {
	onPhotoTaken: (photoUri: string) => void;
	onClose: () => void;
}

export const CameraComponent: React.FC<CameraComponentProps> = ({
	onPhotoTaken,
	onClose,
}) => {
	const [hasPermission, setHasPermission] = useState<boolean | null>(null);
	const [isReady, setIsReady] = useState(false);
	const cameraRef = useRef<CameraView>(null);

	const getCameraPermissions = async () => {
		const { status } = await Camera.requestCameraPermissionsAsync();
		setHasPermission(status === "granted");
	};

	React.useEffect(() => {
		getCameraPermissions();
	}, []);

	const takePicture = async () => {
		if (cameraRef.current && isReady) {
			try {
				const photo = await cameraRef.current.takePictureAsync({
					quality: 0.8,
					base64: false,
				});
				onPhotoTaken(photo.uri); // Return the photo URI to the parent component
			} catch (error) {
				Alert.alert("Error", "Failed to take picture");
			}
		}
	};

	if (hasPermission === null) {
		return (
			<View style={styles.container}>
				<Text style={styles.message}>Requesting camera permission...</Text>
			</View>
		);
	}

	if (hasPermission === false) {
		return (
			<View style={styles.container}>
				<Text style={styles.message}>No access to camera</Text>
				<TouchableOpacity style={styles.button} onPress={onClose}>
					<Text style={styles.buttonText}>Close</Text>
				</TouchableOpacity>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<CameraView
				ref={cameraRef}
				style={styles.camera}
				facing="back"
				onCameraReady={() => setIsReady(true)}
			>
				<View style={styles.overlay}>
					{/* Header */}
					<View style={styles.header}>
						<TouchableOpacity style={styles.closeButton} onPress={onClose}>
							<Ionicons name="close" size={30} color="white" />
						</TouchableOpacity>
						<Text style={styles.headerTitle}>Take Photo</Text>
						<View style={styles.placeholder} />
					</View>

					{/* Bottom controls */}
					<View style={styles.bottomControls}>
						<View style={styles.placeholder} />
						<TouchableOpacity
							style={[styles.captureButton, !isReady && styles.captureButtonDisabled]}
							onPress={takePicture}
							disabled={!isReady}
						>
							<View style={styles.captureButtonInner} />
						</TouchableOpacity>
						<View style={styles.placeholder} />
					</View>
				</View>
			</CameraView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
	},
	camera: {
		flex: 1,
	},
	overlay: {
		flex: 1,
		justifyContent: "space-between",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingTop: 80,
		paddingHorizontal: 20,
		paddingBottom: 20,
	},
	closeButton: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: "rgba(0,0,0,0.5)",
		justifyContent: "center",
		alignItems: "center",
	},
	headerTitle: {
		color: "white",
		fontSize: 18,
		fontWeight: "600",
	},
	placeholder: {
		width: 40,
	},
	bottomControls: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingBottom: 50,
		paddingHorizontal: 20,
	},
	captureButton: {
		width: 80,
		height: 80,
		borderRadius: 40,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 4,
		borderColor: "rgba(255,255,255,0.3)",
	},
	captureButtonDisabled: {
		opacity: 0.5,
	},
	captureButtonInner: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: "white",
	},
	message: {
		color: "white",
		fontSize: 16,
		textAlign: "center",
		marginTop: 50,
	},
	button: {
		backgroundColor: theme.colors.accent,
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 8,
		marginTop: 20,
		alignSelf: "center",
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "600",
	},
});
