import { usePhotoSession } from "@/contexts/photo-session.context";
import { useReferenceImage } from "@/hooks/use-reference-image";
import { useRouter } from "expo-router";
import React from "react";
import { PhotoComparisonComponent } from "./photo-comparison.component";

export const PhotoComparisonContainer: React.FC = () => {
	const router = useRouter();

	// Obtener datos del Context
	const { categoryId, referenceImageId, referenceImageTitle, photoUri } =
		usePhotoSession();

	// Usar el Hook personalizado para cargar la imagen de referencia
	const referenceImageSource = useReferenceImage(categoryId, referenceImageId);

	const handleTakePhoto = () => {
		router.push("/camera");
	};

	const handleSave = () => {
		// TODO: Implementar guardado real con AsyncStorage
		console.log("Saving photo:", {
			categoryId,
			referenceImageId,
			photoUri,
		});
		router.back();
	};

	return (
		<PhotoComparisonComponent
			referenceImageSource={referenceImageSource}
			referenceImageTitle={referenceImageTitle || "Reference Image"}
			currentPhotoUri={photoUri}
			onTakePhoto={handleTakePhoto}
			onSave={handleSave}
		/>
	);
};
