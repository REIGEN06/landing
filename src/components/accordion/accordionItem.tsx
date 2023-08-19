import { ListItem, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

interface AccordionItemProps {
	title: string
	content: string
}

type DetailsProps = {
	open?: boolean
}

export default function AccordionItem({ title, content }: AccordionItemProps) {
	const [isOpened, setIsOpened] = useState(false)

	return (
		<AccordionContainer>
			<Summary onClick={() => setIsOpened((prev) => !prev)}>
				<Typography variant="bold" sx={{ fontSize: '20px' }}>
					{title}
				</Typography>
				{isOpened ? <RemoveIcon /> : <AddIcon />}
			</Summary>
			<Details variant="regular" open={isOpened}>
				{content}
			</Details>
		</AccordionContainer>
	)
}

const AccordionContainer = styled(ListItem)`
	display: block;
	padding: 11px 16px;
	background-color: ${({ theme }) => theme.palette.primary.main};
	border: 1px solid ${({ theme }) => theme.palette.border.main};
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

const Details = styled(Typography)<DetailsProps>(({ theme, open }) => ({
	transition: 'all 0.3s',
	marginTop: open ? theme.spacing(3) : 0,
	opacity: open ? 1 : 0,
	maxHeight: open ? '100%' : '0',
}))
