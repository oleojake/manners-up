export interface BaseContentBlock {
	type: 'paragraph' | 'subheader' | 'image' | 'list';
	content: string;
}

export interface ParagraphBlock extends BaseContentBlock {
	type: 'paragraph';
}

export interface SubheaderBlock extends BaseContentBlock {
	type: 'subheader';
}

export interface ImageBlock extends BaseContentBlock {
	type: 'image';
	imageSource: any;
	headerImage?: boolean;
	ableToTakePicture?: boolean;
	referenceImageId?: string;
}

export interface ListBlock extends BaseContentBlock {
	type: 'list';
	listItems: string[];
}

export type ContentBlock = ParagraphBlock | SubheaderBlock | ImageBlock | ListBlock;

export interface CategoryDetail {
	id: string;
	title: string;
	content: ContentBlock[];
}

export interface TakenPhoto {
	id: string;
	referenceImageId: string;
	photoUri: string;
	timestamp: number;
	referenceImageTitle: string;
}