'use client'
import { Container, Typography, useTheme } from '@mui/material'

export default function () {
	const theme = useTheme()
	return (
		<Container
			maxWidth="md"
			sx={{
				p: 3,
				marginTop: 3,
				border: `1px solid ${theme.palette.border.main}`,
				borderRadius: '10px',
				backgroundColor: `${theme.palette.primary.dark}`,
			}}
		>
			<Typography variant="h3">Landing Page</Typography>
			<Container
				maxWidth="md"
				sx={{
					p: 3,
					marginTop: 3,
					border: `1px solid ${theme.palette.border.main}`,
					borderRadius: '10px',
					backgroundColor: `${theme.palette.secondary.dark}`,
				}}
			>
				<Typography variant="h4">Landing Page</Typography>
			</Container>
			<Container
				maxWidth="md"
				sx={{
					p: 3,
					marginTop: 3,
					border: `1px solid ${theme.palette.border.main}`,
					borderRadius: '10px',
					backgroundColor: `${theme.palette.secondary.light}`,
				}}
			>
				<Typography variant="h5">Landing Page</Typography>
			</Container>
		</Container>
	)
}
