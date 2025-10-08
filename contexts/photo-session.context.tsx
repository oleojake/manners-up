import React, { createContext, useContext, useState } from "react";

/**
 * Este Context maneja la sesión actual de toma de foto.
 * Almacena información sobre qué foto de referencia se está usando.
 * Las fotos tomadas se guardan en AsyncStorage, no en el Context.
 */

interface PhotoSessionContextType {
	// Datos de la imagen de referencia actual
	session: {
		categoryId: string | null;
		referenceImageId: string | null;
		referenceImageTitle: string | null;
	};

	// Acciones para modificar el estado
	actions: {
		setPhotoSession: (
			categoryId: string,
			referenceImageId: string,
			referenceImageTitle: string
		) => void;
		clearSession: () => void;
	};
}

// Crear el Context con un valor por defecto vacío
const PhotoSessionContext = createContext<PhotoSessionContextType | undefined>(
	undefined
);

/**
 * Provider que envuelve la aplicación y provee el estado
 */
export const PhotoSessionProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [categoryId, setCategoryId] = useState<string | null>(null);
	const [referenceImageId, setReferenceImageId] = useState<string | null>(null);
	const [referenceImageTitle, setReferenceImageTitle] = useState<string | null>(
		null
	);

	const setPhotoSession = (
		catId: string,
		refImgId: string,
		refImgTitle: string
	) => {
		setCategoryId(catId);
		setReferenceImageId(refImgId);
		setReferenceImageTitle(refImgTitle);
	};

	const clearSession = () => {
		setCategoryId(null);
		setReferenceImageId(null);
		setReferenceImageTitle(null);
	};

	return (
		<PhotoSessionContext.Provider
			value={{
				session: {
					categoryId,
					referenceImageId,
					referenceImageTitle,
				},
				actions: {
					setPhotoSession,
					clearSession,
				},
			}}
		>
			{children}
		</PhotoSessionContext.Provider>
	);
};

/**
 * Hook personalizado para usar el Context fácilmente
 */
export const usePhotoSession = () => {
	const context = useContext(PhotoSessionContext);
	if (context === undefined) {
		throw new Error("usePhotoSession must be used within a PhotoSessionProvider");
	}
	return context;
};
