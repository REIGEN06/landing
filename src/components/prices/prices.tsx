import { Stack, Switch, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import CategoriesList from './categoriesList'

export default function Prices() {
	const [checked, setChecked] = useState(true)

	return (
		<Section>
			<Subtitle variant="bold">ЦЕНЫ</Subtitle>
			<Title variant="bold">Лучший источник медицинской информации</Title>
			<Typography
				variant="regular"
				sx={{ fontSize: '18px', textAlign: 'center', marginBottom: '48px' }}
			>
				Сервис для врачей, доступный на разных устройствах по подписке на
				эксклюзивные статьи от ведущих экспертов в сфере здравоохранения и
				охраны здоровья
			</Typography>
			<StyledStack direction="row">
				<Typography
					sx={{ cursor: 'pointer' }}
					variant="regular"
					onClick={() => setChecked(false)}
				>
					Год
				</Typography>
				<StyledSwitch checked={checked} onChange={() => setChecked(!checked)} />
				<Typography
					sx={{ cursor: 'pointer' }}
					variant="regular"
					onClick={() => setChecked(true)}
				>
					Месяц
				</Typography>
				<Stock>20% дешевле</Stock>
			</StyledStack>
			<CategoriesList checked={checked} />
		</Section>
	)
}

const Section = styled('section')`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: ${({ theme }) => theme.spacing(10, 0)};
`

const Subtitle = styled(Typography)`
	color: ${({ theme }) => theme.palette.subtitle.main};
	font-size: 20px;
	margin-bottom: ${({ theme }) => theme.spacing(1)};
`

const Title = styled(Typography)`
	font-size: 42px;
	margin-bottom: ${({ theme }) => theme.spacing(8)};
	text-align: center;

	@media (max-width: 1300px) {
		font-size: 32px;
	}

	@media (max-width: 650px) {
		font-size: 24px;
	}
`

const StyledStack = styled(Stack)`
	display: flex;
	align-items: center;
	column-gap: ${({ theme }) => theme.spacing(2)};
	position: relative;
	margin-bottom: ${({ theme }) => theme.spacing(6.5)};
`

const Stock = styled('div')`
	padding: ${({ theme }) => theme.spacing(0.25, 1.25)};
	border-radius: 10px;
	background-color: ${({ theme }) => theme.palette.primary.dark};
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 12px;
	font-weight: 500;
	line-height: 1.4;
	font-family: 'Roboto', sans-serif;
	position: absolute;
	top: -22px;
	left: -40px;
`

const StyledSwitch = styled(Switch)`
	width: 32px;
	height: 16px;
	padding: 0px;
	display: flex;
	&:active {
		& .muiswitch-thumb {
			width: 15px;
		}
		& .MuiSwitch-switchBase.Mui-checked {
			transform: translateX(9px);
		}
	}
	& .MuiSwitch-switchBase {
		padding: ${({ theme }) => theme.spacing(0.25)};
		&.Mui-checked {
			transform: translateX(15px);
			color: ${({ theme }) => theme.palette.primary.main};
			& + .MuiSwitch-track {
				opacity: 1;
				background-color: ${({ theme }) => theme.palette.switchField.main};
			}
		}
	}
	& .MuiSwitch-thumb {
		width: 12px;
		height: 12px;
		border-radius: 6px;
		transition: ${({ theme }) =>
			theme.transitions.create(['width'], {
				duration: 200,
			})};
	}
	& .MuiSwitch-track {
		border-radius: 8px;
		opacity: 1;
		background-color: ${({ theme }) => theme.palette.secondary.main};
	}
`
