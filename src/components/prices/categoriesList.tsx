import { Stack, styled } from '@mui/material'
import React from 'react'
import Category from './category'

export type CategoriesList = {
	category: string
	description: string
	priceForAMonth: number
	priceForAYear: number
}

const categoriesList: CategoriesList[] = [
	{
		category: 'Стажер',
		description: 'Для начинающих специалистов',
		priceForAMonth: 35,
		priceForAYear: 25,
	},
	{
		category: 'Специалист',
		description: 'Для уверенных специалистов',
		priceForAMonth: 65,
		priceForAYear: 55,
	},
	{
		category: 'Эксперт',
		description: 'Для шерстяных волчар',
		priceForAMonth: 125,
		priceForAYear: 95,
	},
]

export default function CategoriesList({ checked }: { checked: boolean }) {
	return (
		<StyledStack>
			{categoriesList.map((category) => (
				<Category key={category.category} checked={checked} {...category} />
			))}
		</StyledStack>
	)
}

const StyledStack = styled(Stack)`
	display: grid;
	grid-template-columns: repeat(3, minmax(200px, 410px));
	column-gap: ${({ theme }) => theme.spacing(3)};

	@media (max-width: 1100px) {
		grid-template-columns: repeat(2, minmax(200px, 410px));
		row-gap: 24px;
	}

	@media (max-width: 700px) {
		grid-template-columns: minmax(200px, 410px);
	}
`
