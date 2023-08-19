import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Link,
	Typography,
	styled,
} from '@mui/material'
import React from 'react'
import ArrowIcon from '../../assets/icons/arrow.svg'
import { StaticImageData } from 'next/image'
import { LoaderIcon } from '../LoaderIcon'

interface ArticleCardProps {
	img?: StaticImageData
	title: string
	content: string
}

export default function ArticlesCard({
	img,
	title,
	content,
}: ArticleCardProps) {
	return (
		<StyledCard>
			{img?.src ? (
				<CardMedia component="img" height="220" image={img?.src} />
			) : (
				<LoaderIcon />
			)}
			<CardContent>
				<Title variant="bold">{title}</Title>
				<Content variant="regular">{content}</Content>
				<CardActions sx={{ padding: 0 }}>
					<StyledLink href="#">
						<MoreInfo variant="medium">Подробнее</MoreInfo>
						<ArrowIcon />
					</StyledLink>
				</CardActions>
			</CardContent>
		</StyledCard>
	)
}

const StyledCard = styled(Card)`
	max-width: 308px;
	width: 100%;
	box-shadow: none;
	border: 1px solid ${({ theme }) => theme.palette.border.light};
	border-radius: 8px;
`

const Title = styled(Typography)`
	font-size: 20px;
	margin-top: ${({ theme }) => theme.spacing(2)};
`

const Content = styled(Typography)`
	margin: ${({ theme }) => theme.spacing(2, 0, 5.75, 0)};
`

const StyledLink = styled(Link)`
	text-decoration: none;
	display: flex;
	align-items: center;
`

const MoreInfo = styled(Typography)`
	color: ${({ theme }) => theme.palette.secondary.main};
	margin-right: ${({ theme }) => theme.spacing(1.625)};
	font-size: 20;
`
