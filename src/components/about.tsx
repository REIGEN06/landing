import { Box, Link, Stack, Typography, styled, useTheme } from '@mui/material'
import React from 'react'
import Consultation from '../assets/icons/consultation.svg'
import ArrowIcon from '../assets/icons/arrow.svg'
import TestIcon from '../assets/icons/test.svg'
import KitIcon from '../assets/icons/kit.svg'

export default function About() {
	const theme = useTheme()
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
				<Card>
					<Consultation />
					<Typography variant="bold" sx={{ margin: '24px 0 16px 0' }}>
						Консультация
					</Typography>
					<Typography
						variant="regular"
						sx={{ marginBottom: '32px', maxWidth: '240px' }}
					>
						На нашем форуме вы найдете ответы на вопросы
					</Typography>
					<Link
						href="#"
						sx={{
							textDecoration: 'none',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<Typography
							sx={{
								color: `${theme.palette.secondary.main}`,
								marginRight: '13px',
							}}
						>
							Узнать больше
						</Typography>
						<ArrowIcon />
					</Link>
				</Card>
				<Card>
					<TestIcon />
					<Typography variant="bold" sx={{ margin: '24px 0 16px 0' }}>
						Тесты
					</Typography>
					<Typography
						variant="regular"
						sx={{ marginBottom: '32px', maxWidth: '240px' }}
					>
						Вы можете пройти тесты на нашем сайте
					</Typography>
					<Link
						href="#"
						sx={{
							textDecoration: 'none',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<Typography
							sx={{
								color: `${theme.palette.secondary.main}`,
								marginRight: '13px',
							}}
						>
							Узнать больше
						</Typography>
						<ArrowIcon />
					</Link>
				</Card>
				<Card>
					<KitIcon />
					<Typography variant="bold" sx={{ margin: '24px 0 16px 0' }}>
						Поиск клиники
					</Typography>
					<Typography
						variant="regular"
						sx={{ marginBottom: '32px', maxWidth: '240px' }}
					>
						Мы поможем найти Вам ближайшую поликлинику
					</Typography>
					<Link
						href="#"
						sx={{
							textDecoration: 'none',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<Typography
							sx={{
								color: `${theme.palette.secondary.main}`,
								marginRight: '13px',
							}}
						>
							Узнать больше
						</Typography>
						<ArrowIcon />
					</Link>
				</Card>
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

const Card = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	max-width: 240px;
	padding: 0 16px 16px 16px;
`

const Cards = styled(Stack)`
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 890px) {
		justify-content: center;
		row-gap: 30px;
	}
`
