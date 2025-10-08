import { fetchCategoryDetail } from "@/pods/category-detail/api";
import { useEffect, useState } from "react";

/**
 * Hook personalizado para cargar la imagen de referencia
 * Encapsula la lógica de buscar la imagen en los datos de la categoría
 */
export const useReferenceImage = (categoryId: string | null, referenceImageId: string | null) => {
	const [referenceImageSource, setReferenceImageSource] = useState<any>(null);

	useEffect(() => {
		const loadReferenceImage = async () => {
			if (!categoryId || !referenceImageId) {
				setReferenceImageSource(null);
				return;
			}

			try {
				const categoryDetail = await fetchCategoryDetail(categoryId);
				const imageBlock = categoryDetail.content.find(
					(block) =>
						block.type === "image" && block.referenceImageId === referenceImageId
				);

				if (imageBlock && "imageSource" in imageBlock) {
					setReferenceImageSource(imageBlock.imageSource);
				}
			} catch (err) {
				console.error("Error loading reference image:", err);
			}
		};

		loadReferenceImage();
	}, [categoryId, referenceImageId]);

	return referenceImageSource;
};
