import { Stack, Typography, styled } from '@mui/material'
import React, { ReactNode } from 'react'
import Consultation from '../assets/icons/consultation.svg'
import TestIcon from '../assets/icons/test.svg'
import KitIcon from '../assets/icons/kit.svg'
import AboutCard from './aboutCard'

export type Card = {
	icon: ReactNode
	title: string
	description: string
}

const cards: Card[] = [
	{
		icon: <Consultation />,
		title: 'Консультация',
		description: 'На нашем форуме вы найдете ответы на вопросы',
	},
	{
		icon: <TestIcon />,
		title: 'Тесты',
		description: 'Вы можете пройти тесты на нашем сайте',
	},
	{
		icon: <KitIcon />,
		title: 'Поиск клиники',
		description: 'Мы поможем найти Вам ближайшую поликлинику',
	},
]

export default function About() {
	return (
		<FlexibleStack>
			<Info>
				<Title variant="bold">О проекте</Title>
				<Typography variant="regular" sx={{ fontSize: '18px' }}>
					Наш проект создан группой врачей для популяризации современных
					медицинских знаний их доступности для всех, кто в этом заинтересован.
				</Typography>
			</Info>
			<Cards direction="row">
				{cards.map((card) => (
					<AboutCard key={card.title} {...card} />
				))}
			</Cards>
		</FlexibleStack>
	)
}

const Title = styled(Typography)`
	font-size: 42px;
	margin-bottom: 16px;

	@media (max-width: 1200px) {
		font-size: 36px;
	}
`

const Info = styled('div')`
	max-width: 384px;

	@media (max-width: 1330px) {
		margin-bottom: 50px;
		max-width: 800px;
	}
`

const FlexibleStack = styled('section')`
	display: flex;
	justify-content: space-between;
	padding: 80px 0;

	@media (max-width: 1330px) {
		flex-direction: column;
		align-items: center;
	}
`

const Cards = styled(Stack)`
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 890px) {
		justify-content: center;
		row-gap: 30px;
	}
`
