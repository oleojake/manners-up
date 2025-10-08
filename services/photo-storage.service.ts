import { TakenPhoto } from '@/pods/category-detail/model';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Servicio para gestionar el almacenamiento de fotos tomadas
 * Usa AsyncStorage para persistir las fotos en el dispositivo
 */

const PHOTOS_STORAGE_KEY = '@manners_up_photos';

/**
 * Función privada para obtener todas las fotos
 */
const getAllPhotos = async (): Promise<TakenPhoto[]> => {
	try {
		const photosJson = await AsyncStorage.getItem(PHOTOS_STORAGE_KEY);
		return photosJson ? JSON.parse(photosJson) : [];
	} catch (error) {
		console.error('Error getting photos:', error);
		return [];
	}
};

/**
 * Obtiene una foto específica por su referenceImageId
 */
export const getPhotoByReferenceId = async (referenceImageId: string): Promise<string | null> => {
	try {
		const photos = await getAllPhotos();
		const photo = photos.find(p => p.referenceImageId === referenceImageId);
		return photo?.photoUri || null;
	} catch (error) {
		console.error('Error getting photo:', error);
		return null;
	}
};

/**
 * Guarda o actualiza una foto
 */
export const savePhoto = async (photo: TakenPhoto): Promise<void> => {
	try {
		const photos = await getAllPhotos();
		const existingIndex = photos.findIndex(p => p.referenceImageId === photo.referenceImageId);

		if (existingIndex >= 0) {
			photos[existingIndex] = photo;
		} else {
			photos.push(photo);
		}

		await AsyncStorage.setItem(PHOTOS_STORAGE_KEY, JSON.stringify(photos));
	} catch (error) {
		console.error('Error saving photo:', error);
		throw error;
	}
};
