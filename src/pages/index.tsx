import React from 'react'

import { Container, useTheme } from '@mui/material'
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
			<About />
		</Container>
	)
}

export default Landing
