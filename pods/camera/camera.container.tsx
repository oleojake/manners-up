import { usePhotoSession } from "@/contexts/photo-session.context";
import { useRouter } from "expo-router";
import React from "react";
import { CameraComponent } from "./camera.component";

export const CameraContainer: React.FC = () => {
	const router = useRouter();
	const { actions } = usePhotoSession();

	const handlePhotoTaken = (photoUri: string) => {
		actions.setPhotoUri(photoUri);
		router.back();
	};

	const handleClose = () => {
		router.back();
	};

	return (
		<CameraComponent onPhotoTaken={handlePhotoTaken} onClose={handleClose} />
	);
};
