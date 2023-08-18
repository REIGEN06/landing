import { Stack, Typography, styled } from '@mui/material'
import React from 'react'
import { CategoriesList } from './categoriesList'
import StyledButton from '../styledButton'
import DoneSvg from '../../assets/icons/feature.svg'

type CategoryProps = CategoriesList & {
	checked: boolean
}

type PriceTypographyProps = {
	checked?: boolean
}

type AdvantagesList = {
	advantage: string
	status: 'Стажер' | 'Специалист' | 'Эксперт'
}

const advantages: AdvantagesList[] = [
	{
		advantage: 'Инфекции',
		status: 'Стажер',
	},
	{
		advantage: 'Общая медицина',
		status: 'Стажер',
	},
	{
		advantage: 'Травмы',
		status: 'Стажер',
	},
	{
		advantage: 'Терапия',
		status: 'Стажер',
	},
	{
		advantage: 'Неврология',
		status: 'Стажер',
	},
	{
		advantage: 'Эндокринология',
		status: 'Специалист',
	},
	{
		advantage: 'Фтизиатрия',
		status: 'Специалист',
	},
	{
		advantage: 'Флебология',
		status: 'Специалист',
	},
	{
		advantage: 'Педиатрия',
		status: 'Эксперт',
	},
	{
		advantage: 'Кардиология',
		status: 'Эксперт',
	},
	{
		advantage: 'Дерматология',
		status: 'Эксперт',
	},
	{
		advantage: 'Онкология',
		status: 'Эксперт',
	},
]

function filterAdvantages(category: string) {
	const result = []
	switch (category) {
		case 'Стажер':
			result.push(
				...advantages.filter((advantage) => advantage.status === 'Стажер')
			)
			break
		case 'Специалист':
			result.push(
				...advantages.filter((advantage) => advantage.status !== 'Эксперт')
			)
			break
		case 'Эксперт':
			result.push(...advantages)
			break
	}
	return result
}

export default function Category({
	category,
	priceForAMonth,
	priceForAYear,
	description,
	checked,
}: CategoryProps) {
	return (
		<StyledStack>
			{category === 'Специалист' && <CategoryBadge>Популярный</CategoryBadge>}
			<Typography variant="bold" sx={{ fontSize: '32px', marginBottom: '8px' }}>
				{category}
			</Typography>
			<Typography
				variant="regular"
				sx={{ fontSize: '18px', marginBottom: '32px' }}
			>
				{description}
			</Typography>
			<Price variant="bold" checked={!checked} sx={{ marginBottom: '8px' }}>
				${priceForAMonth}
			</Price>
			{checked === false ? (
				<Price variant="bold">${priceForAYear}</Price>
			) : null}
			<Typography
				variant="regular"
				sx={{ fontSize: '14px', marginBottom: '32px' }}
			>
				${priceForAMonth} USD каждый месяц
			</Typography>
			<StyledButton sx={{ padding: '18px 32px', fontSize: '20px', border: 0 }}>
				Начать
			</StyledButton>
			<Advantages>
				{filterAdvantages(category).map((advantage) => (
					<Advantage key={advantage.advantage}>
						<DoneSvg />
						<Typography variant="regular" sx={{ fontSize: '18px' }}>
							{advantage.advantage}
						</Typography>
					</Advantage>
				))}
			</Advantages>
		</StyledStack>
	)
}

const StyledStack = styled(Stack)`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 48px 24px;
	border-radius: 8px;
	border: 1px solid #dde1e6;
	position: relative;
`

const Price = styled(Typography)<PriceTypographyProps>(({ checked }) => ({
	fontSize: '54px',
	color: checked ? '#A2A9B0' : '#21272A',
	textDecoration: checked ? 'line-through' : 'none',
}))

const Advantages = styled(Stack)`
	display: flex;
	flex-direction: column;
	margin-top: 32px;
	row-gap: 8px;
`
const Advantage = styled('div')`
	display: flex;
	align-items: center;
	column-gap: 8px;
`

const CategoryBadge = styled('div')`
	padding: 2px 10px 2px 10px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.palette.primary.dark};
	text-align: center;
	vertical-align: middle;
	font-size: 12px;
	font-weight: 500;
	line-height: 1.4;
	font-family: 'Roboto', sans-serif;
	position: absolute;
	top: -10.4px;
	left: 50%;
	transform: translateX(-50%);
`
