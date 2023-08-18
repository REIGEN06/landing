import { Stack, Typography, styled } from '@mui/material'
import React from 'react'
import StyledButton from '../styledButton'
import ArticlesCard from './articlesCard'
import Headaches from '../../assets/images/headachesjpg.jpg'
import Medicine from '../../assets/images/medicine.jpg'
import Antidepressants from '../../assets/images/antidepressants.jpg'
import { StaticImageData } from 'next/image'

type ArticlesList = {
	img?: StaticImageData
	title: string
	content: string
	id: number
}

const articlesList: ArticlesList[] = [
	{
		id: 1,
		img: Headaches,
		title: 'Головная боль',
		content:
			'Врач-невролог из Москвы, Иванов Иван Иванович, отвечает на частые вопросы касающиеся проблемы ...',
	},
	{
		id: 2,
		title: 'Мигрень',
		content:
			'Информация для пациентов. Мигрень. Симптомы, диагностика, лечение, профилактика',
	},
	{
		id: 3,
		img: Medicine,
		title: 'Доказательная медицина',
		content:
			'Читая статьи, и получая консультации на нашем сайте, вы часто будете встречаться...',
	},
	{
		id: 4,
		img: Antidepressants,
		title: 'Антидепрессанты',
		content:
			'Как показало исследование, антидепрессанты, особенно относящиеся к классе селектив...',
	},
]

export default function Articles() {
	return (
		<Section>
			<Subtitle variant="bold">СТАТЬИ</Subtitle>
			<Title variant="bold">
				Статьи для врачей, пациентов и их родственников, а также
				научно-популярные доклады о прорывах в медицине
			</Title>
			<Cards direction="row">
				{articlesList.map((article) => (
					<ArticlesCard key={article.id} {...article} />
				))}
			</Cards>
			<StyledButton sx={{ border: 0, padding: '18px 32px', fontSize: '20px' }}>
				Все статьи
			</StyledButton>
		</Section>
	)
}

const Section = styled('section')`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 80px 0;
`

const Subtitle = styled(Typography)`
	color: #001d6c;
	font-size: 20px;
	margin-bottom: 8px;
`

const Title = styled(Typography)`
	font-size: 42px;
	margin-bottom: 64px;
	text-align: center;

	@media (max-width: 1300px) {
		font-size: 32px;
	}

	@media (max-width: 650px) {
		font-size: 24px;
	}
`

const Cards = styled(Stack)`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;

	@media (max-width: 1300px) {
		grid-template-columns: 1fr 1fr;
		row-gap: 16px;
	}

	@media (max-width: 650px) {
		grid-template-columns: 1fr;
	}

	column-gap: 16px;
	margin-bottom: 64px;
`
