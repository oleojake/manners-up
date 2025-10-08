import { CategoryDetail } from "../model";

export const fetchCategoryDetail = (categoryId: string): Promise<CategoryDetail> => {
	const categoryDetails: Record<string, CategoryDetail> = {
		"1": {
			id: "1",
			title: "Table Setting",
			content: [
				{
					type: "paragraph",
					content: "Setting a formal dining table is an art that reflects sophistication and attention to detail. Whether you're hosting a business dinner or a special celebration, proper table setting creates an atmosphere of elegance and respect for your guests."
				},
				{
					type: "image",
					content: "Table Setting",
					imageSource: require("@/assets/categories-list/table-setting/table-setting-draw.jpg"),
					headerImage: true,
				},
				{
					type: "subheader",
					content: "Essential Table Setting Components"
				},
				{
					type: "list",
					content: "Basic elements for a complete table setting:",
					listItems: [
						"Chargers or placemats as the foundation",
						"Formal dinner plates and salad plates",
						"Water glasses and wine glasses",
						"Utensils arranged in order of use",
						"Napkins folded elegantly",
						"Centerpiece that doesn't obstruct conversation"
					]
				},
				{
					type: "subheader",
					content: "Utensil Placement Rules"
				},
				{
					type: "paragraph",
					content: "The golden rule: utensils are placed in the order they will be used, working from the outside in. Forks go on the left, knives and spoons on the right. The knife blade always faces the plate."
				},
				{
					type: "image",
					content: "Utensil Placement Rules",
					imageSource: require("@/assets/categories-list/table-setting/utensil-placement-rule.jpg"),
					ableToTakePicture: true,
					referenceImageId: "table-setting-1",
				},
				{
					type: "subheader",
					content: "Glassware Arrangement"
				},
				{
					type: "paragraph",
					content: "Glasses are positioned above the knife, arranged from left to right: water glass, white wine glass, red wine glass. This creates a logical flow for your guests."
				},
				{
					type: "image",
					content: "Glassware Arrangement",
					imageSource: require("@/assets/categories-list/table-setting/glassware-arrangement.jpg"),
					ableToTakePicture: true,
					referenceImageId: "table-setting-2",
				},
				{
					type: "subheader",
					content: "Napkin Etiquette"
				},
				{
					type: "paragraph",
					content: "Napkins can be placed on the plate, to the left of the forks, or in the water glass. Choose one style and maintain consistency."
				},
				{
					type: "image",
					content: "Napkin Etiquette",
					imageSource: require("@/assets/categories-list/table-setting/napkin-etiquette.jpg"),
					ableToTakePicture: true,
					referenceImageId: "table-setting-3",
				},
			]
		},
		"2": {
			id: "2",
			title: "Formal Greetings",
			content: [
				{
					type: "paragraph",
					content: "Master the art of formal greetings, handshakes, introductions, and proper etiquette for various social situations."
				}
			]
		},
		"3": {
			id: "3",
			title: "Event Etiquette",
			content: [
				{
					type: "paragraph",
					content: "Understand the proper behavior and dress codes for formal events, weddings, business gatherings, and social occasions."
				}
			]
		},
		"4": {
			id: "4",
			title: "Business Attire",
			content: [
				{
					type: "paragraph",
					content: "Learn appropriate business dress codes, professional appearance standards, and wardrobe essentials for success."
				}
			]
		},
		"5": {
			id: "5",
			title: "Job Interviews",
			content: [
				{
					type: "paragraph",
					content: "Prepare for job interviews with proper etiquette, body language, communication skills, and professional presentation."
				}
			]
		},
	};

	const categoryDetail = categoryDetails[categoryId] || {
		id: categoryId,
		title: "Category Not Found",
		content: [
			{
				type: "paragraph",
				content: "The requested category could not be found."
			}
		]
	};

	return Promise.resolve(categoryDetail);
};
