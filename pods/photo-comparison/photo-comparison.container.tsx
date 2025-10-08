import { usePhotoSession } from "@/contexts/photo-session.context";
import { useReferenceImage } from "@/hooks/use-reference-image";
import * as PhotoStorageService from "@/services/photo-storage.service";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import { PhotoComparisonComponent } from "./photo-comparison.component";

export const PhotoComparisonContainer: React.FC = () => {
	const router = useRouter();
	const { session } = usePhotoSession();
	const { categoryId, referenceImageId, referenceImageTitle } = session;

	// Estado local para la foto tomada (solo desde AsyncStorage)
	const [currentPhotoUri, setCurrentPhotoUri] = useState<string | null>(null);

	// Cargar la imagen de referencia
	const referenceImageSource = useReferenceImage(categoryId, referenceImageId);

	// Cargar la foto guardada desde AsyncStorage cada vez que la pantalla gana foco
	useFocusEffect(
		useCallback(() => {
			const loadSavedPhoto = async () => {
				if (referenceImageId) {
					const savedPhotoUri =
						await PhotoStorageService.getPhotoByReferenceId(referenceImageId);
					setCurrentPhotoUri(savedPhotoUri);
				}
			};
			loadSavedPhoto();
		}, [referenceImageId])
	);

	const handleTakePhoto = () => {
		router.push("/camera");
	};

	return (
		<PhotoComparisonComponent
			referenceImageSource={referenceImageSource}
			referenceImageTitle={referenceImageTitle || "Reference Image"}
			currentPhotoUri={currentPhotoUri}
			onTakePhoto={handleTakePhoto}
		/>
	);
};
