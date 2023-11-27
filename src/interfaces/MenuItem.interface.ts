export interface IMenuItem {
	id: number
	slug: string
	title: { rendered: string }
	content: { rendered: string }
	featured_media: number
	acf: {
		price: number
		weight: number
	}
}