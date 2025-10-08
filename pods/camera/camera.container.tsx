import { usePhotoSession } from "@/contexts/photo-session.context";
import * as PhotoStorageService from "@/services/photo-storage.service";
import { useRouter } from "expo-router";
import React from "react";
import { CameraComponent } from "./camera.component";

export const CameraContainer: React.FC = () => {
	const router = useRouter();
	const { session } = usePhotoSession();

	const handlePhotoTaken = async (photoUri: string) => {
		// Guardar directamente en AsyncStorage
		if (session.referenceImageId && session.referenceImageTitle) {
			const takenPhoto = {
				id: `${session.referenceImageId}-${Date.now()}`,
				referenceImageId: session.referenceImageId,
				photoUri,
				timestamp: Date.now(),
				referenceImageTitle: session.referenceImageTitle,
			};

			await PhotoStorageService.savePhoto(takenPhoto);
		}

		router.back();
	};

	const handleClose = () => {
		router.back();
	};

	return (
		<CameraComponent onPhotoTaken={handlePhotoTaken} onClose={handleClose} />
	);
};
