export type carouselItem = {
	logo: string
	content: string
	name: string
	job: string
}

export const carouselArray: carouselItem[] = [
	{
		logo: 'Zoomerr',
		content:
			'Исследование гласит, что наличие хороших навыков чтения в детском возрасте является предиктором высокого уровня интеллекта у молодых взрослых людей',
		name: 'Петров павел',
		job: 'Невролог',
	},

	{
		logo: 'ArtVenue',
		content:
			'Астма - это хроническое заболевание легких. Симптомы заболевания включают кашель, свистящее дыхание, одышку и чувство стеснения в груди.',
		name: 'Кириллов Кирилл',
		job: 'Пульмонолог',
	},
]
