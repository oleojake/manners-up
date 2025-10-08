import { colors, typography } from "@/global_css/theme";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { CameraButton } from "./components";
import { CategoryDetail, ContentBlock, ImageBlock } from "./model";

interface CategoryDetailComponentProps {
	categoryDetail: CategoryDetail;
}

const renderContentBlock = (block: ContentBlock, categoryId: string) => {
	switch (block.type) {
		case "paragraph":
			return <Text style={styles.paragraph}>{block.content}</Text>;
		case "subheader":
			return <Text style={styles.subheader}>{block.content}</Text>;
		case "list":
			return (
				<View style={styles.listContainer}>
					<Text style={styles.listTitle}>{block.content}</Text>
					{block.listItems?.map((item, itemIndex) => (
						<Text key={itemIndex} style={styles.listItem}>
							• {item}
						</Text>
					))}
				</View>
			);
		case "image":
			const imageBlock = block as ImageBlock;
			return (
				<View style={styles.imageContainer}>
					<Image
						source={imageBlock.imageSource}
						style={imageBlock.headerImage ? styles.headerImage : styles.image}
						resizeMode="cover"
					/>
					{imageBlock.ableToTakePicture && imageBlock.referenceImageId && (
						<CameraButton
							categoryId={categoryId}
							referenceImageId={imageBlock.referenceImageId}
							referenceImageTitle={imageBlock.content}
						/>
					)}
				</View>
			);
		default:
			return null;
	}
};

export const CategoryDetailComponent: React.FC<
	CategoryDetailComponentProps
> = ({ categoryDetail }) => {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.title}>{categoryDetail.title}</Text>
				{categoryDetail.content.map((block, index) => (
					<View key={index}>{renderContentBlock(block, categoryDetail.id)}</View>
				))}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	content: {
		padding: 24,
	},
	title: {
		fontSize: typography.fontSize["3xl"],
		fontFamily: typography.fontFamily.bold,
		color: colors.text,
		marginBottom: 24,
	},
	paragraph: {
		fontSize: typography.fontSize.base,
		fontFamily: typography.fontFamily.regular,
		color: colors.text,
		lineHeight: 24,
		marginBottom: 16,
	},
	subheader: {
		fontSize: typography.fontSize.xl,
		fontFamily: typography.fontFamily.semiBold,
		color: colors.text,
		marginTop: 24,
		marginBottom: 12,
	},
	listContainer: {
		marginBottom: 16,
	},
	listTitle: {
		fontSize: typography.fontSize.base,
		fontFamily: typography.fontFamily.medium,
		color: colors.text,
		marginBottom: 8,
	},
	listItem: {
		fontSize: typography.fontSize.base,
		fontFamily: typography.fontFamily.regular,
		color: colors.text,
		lineHeight: 22,
		marginBottom: 4,
		paddingLeft: 8,
	},
	image: {
		width: "100%",
		height: 200,
		borderRadius: 8,
		marginVertical: 16,
	},
	headerImage: {
		width: "100%",
		height: 350,
		borderRadius: 8,
		marginVertical: 16,
	},
	imageContainer: {
		marginVertical: 16,
	},
});
