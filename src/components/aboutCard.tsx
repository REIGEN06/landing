import React from 'react'
import { Box, Link, Typography, styled, useTheme } from '@mui/material'
import ArrowIcon from '../assets/icons/arrow.svg'
import { Card } from './about'

export default function AboutCard({ title, icon, description }: Card) {
	const theme = useTheme()
	return (
		<Card>
			{icon}
			<Typography variant="bold" sx={{ margin: '24px 0 16px 0' }}>
				{title}
			</Typography>
			<Typography
				variant="regular"
				sx={{ marginBottom: '32px', maxWidth: '240px' }}
			>
				{description}
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
	)
}

const Card = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	max-width: 240px;
	padding: ${({ theme }) => theme.spacing(0, 2, 2, 2)};
`
