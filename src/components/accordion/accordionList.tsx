import React from 'react'
import AccordionItem from './accordionItem'
import { List, styled } from '@mui/material'

type AccordionItems = {
	title: string
	content: string
}

const accordions: AccordionItems[] = [
	{
		title: 'В каких городах работает сервис?',
		content:
			'Обращаться можно из любого города России, даже если вы путешествуете за границу: достаточно иметь доступ к интернету и возможность оплатить консультацию онлайн.',
	},
	{
		title: 'Какие врачи меня консультируют?',
		content:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, perferendis!',
	},
	{
		title: 'А как врач поможет через интернет?',
		content:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ullam commodi, fugiat nihil vel accusantium.',
	},
	{
		title: 'Что за врачи работают на сервисе, откуда они?',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore.',
	},
	{
		title: 'Запись разговора не попадёт в соцсети?',
		content:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam aliquid explicabo tempora a molestiae, veniam consequatur necessitatibus?',
	},
]

export default function AccordionList() {
	return (
		<StyledList>
			{accordions.map((accordion) => (
				<AccordionItem {...accordion} />
			))}
		</StyledList>
	)
}

const StyledList = styled(List)`
	max-width: 800px;
	width: 100%;
`
