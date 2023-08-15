import { ListItem, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

interface AccordionItemProps {
	title: string
	content: string
}

export default function AccordionItem({ title, content }: AccordionItemProps) {
	const [isOpened, setIsOpened] = useState(false)

	return (
		<AccordionContainer>
			<Summary onClick={() => setIsOpened((prev) => !prev)}>
				<Typography variant="bold" sx={{ fontSize: '20px' }}>
					{title}
				</Typography>
				{isOpened ? <AddIcon /> : <RemoveIcon />}
			</Summary>
			{isOpened ? <Details variant="regular">{content}</Details> : null}
		</AccordionContainer>
	)
}

const AccordionContainer = styled(ListItem)`
	display: block;
	padding: 11px 16px;
	background-color: ${({ theme }) => theme.palette.primary.main};
	border: 1px solid #dde1e6;
	border-radius: 8px;
	margin-bottom: 16px;
`

const Summary = styled('div')`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	user-select: none;
`

const Details = styled(Typography)`
	margin-top: 24px;
`
