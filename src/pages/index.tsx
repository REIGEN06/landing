import React from 'react'

import { Container, Typography, useTheme } from '@mui/material'
import About from '@/components/about'

const Landing = () => {
	const theme = useTheme()
	return (
		<Container
			maxWidth={false}
			sx={{
				p: 3,
				marginTop: 3,
				border: `1px solid ${theme.palette.border.main}`,
				borderRadius: '10px',
				backgroundColor: `${theme.palette.primary.dark}`,
				maxWidth: '1330px',
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
			<Typography>Regular</Typography>
			<Typography variant="regular">Regular too</Typography>
			<Typography variant="medium">Medium</Typography>
			<Typography variant="bold">Bold</Typography>
			<About />
		</Container>
	)
}

export default Landing
