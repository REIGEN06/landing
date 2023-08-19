import { Typography, styled } from '@mui/material'
import React from 'react'
import AccordionList from './accordionList'
import DotsIcon from '../../assets/icons/dots.svg'

export default function Accordion() {
	return (
		<StyledStack>
			<PositionedIconLeft />
			<PositionedIconRight />
			<Subtitle variant="bold">ВОПРОСЫ</Subtitle>
			<Title variant="bold">Ответы на частые вопросы</Title>
			<AccordionList />
		</StyledStack>
	)
}

const StyledStack = styled('section')`
	background: linear-gradient(
		${({ theme }) => theme.palette.secondary.light},
		${({ theme }) => theme.palette.secondary.dark}
	);
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 80px 0;
	position: relative;
`

const PositionedIconLeft = styled(DotsIcon)`
	position: absolute;
	top: 0;
	left: 0;
`

const PositionedIconRight = styled(DotsIcon)`
	position: absolute;
	bottom: 0;
	right: 0;
`

const Subtitle = styled(Typography)`
	color: ${({ theme }) => theme.palette.subtitle.main};
	font-size: 20px;
	margin-bottom: 8px;
`

const Title = styled(Typography)`
	font-size: 42px;
	margin-bottom: 64px;
`
