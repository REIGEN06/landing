'use client'
import { Container, useTheme } from '@mui/material'

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
			Landing Page
		</Container>
	)
}
