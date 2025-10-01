import { Category } from "../model";

export const fetchCategories = (): Promise<Category[]> => {
	const categoriesData: Category[] = [
		{
			id: "1",
			name: "Table Setting",
			image: require("@/assets/categories-list/tabble-setting.jpg"),
		},
		{
			id: "2",
			name: "Formal Greetings",
			image: require("@/assets/categories-list/formal-greetings.jpg"),
		},
		{
			id: "3",
			name: "Event Etiquette",
			image: require("@/assets/categories-list/event-etiquette.jpg"),
		},
		{
			id: "4",
			name: "Business Attire",
			image: require("@/assets/categories-list/business-attire.jpg"),
		},
		{
			id: "5",
			name: "Job Interviews",
			image: require("@/assets/categories-list/job-interview.jpg"),
		},
	];
	return Promise.resolve(categoriesData);
};

