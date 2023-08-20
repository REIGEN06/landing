import {
	Box,
	FormGroup,
	InputBase,
	Link,
	List,
	ListItem,
	Stack,
	Typography,
	styled,
} from '@mui/material'
import React, { ReactNode } from 'react'
import TrafalgarIcon from '../../assets/icons/trafalgar-icon.svg'
import EmailIcon from '../../assets/icons/email.svg'
import StyledButton from '../styledButton'
import AppStoreIcon from '../../assets/icons/app-store.svg'
import GooglePlayIcon from '../../assets/icons/google-play.svg'
import YouTubeIcon from '../../assets/icons/youtube.svg'
import FacebookIcon from '../../assets/icons/facebook.svg'
import TwitterIcon from '../../assets/icons/twitter.svg'
import InstagramIcon from '../../assets/icons/instagram.svg'
import LinkedInIcon from '../../assets/icons/linkedin.svg'

type Lists = {
	title: string
	links: string[]
}

const lists: Lists[] = [
	{
		title: 'Для взрослых',
		links: ['Кардиология', 'Терапия', 'Флебология', 'Травмы'],
	},
	{
		title: 'Для детей',
		links: ['Педиатрия', 'Инфекции', 'Неврология', 'Фтизиатрия'],
	},
	{
		title: 'Новости',
		links: ['Новости здравоохранения', 'Открытия', 'Документы', 'Справочники'],
	},
]

const socials = [
	<YouTubeIcon />,
	<FacebookIcon />,
	<TwitterIcon />,
	<InstagramIcon />,
	<LinkedInIcon />,
]

export default function Footer() {
	return (
		<FooterContainer>
			<Top direction="row">
				<TrafalgarIcon />
				<Form>
					<StyledInput>
						<EmailIcon />
						<InputBase
							sx={{ marginLeft: '8px' }}
							inputProps={{
								sx: { height: '22px', padding: 0 },
							}}
							placeholder="Подписаться на рассылку"
						/>
					</StyledInput>
					<FormButton>Подписаться</FormButton>
				</Form>
			</Top>
			<Middle direction="row">
				{lists.map((list) => (
					<Stack>
						<Title variant="bold">{list.title}</Title>
						<StyledList>
							{list.links.map((link) => (
								<StyledListItem>
									<Link href="#" sx={{ textDecoration: 'none' }}>
										{link}
									</Link>
								</StyledListItem>
							))}
						</StyledList>
					</Stack>
				))}
				<Contacts>
					<Title variant="bold">Контакты</Title>
					<Storages>
						<Link href="#">
							<AppStoreIcon />
						</Link>
						<Link href="#">
							<GooglePlayIcon />
						</Link>
					</Storages>
					<Title variant="bold">Присоединиться к нам</Title>
					<Socials>
						{socials.map((social) => (
							<Link href="#">{social}</Link>
						))}
					</Socials>
				</Contacts>
			</Middle>
			<Bottom direction="row">
				<Copyright>Тестовая компания @ 2023. Все права защищены.</Copyright>
				<Navigation>
					<StyledListItem>
						<Link href="#" sx={{ textDecoration: 'none' }}>
							Медицина
						</Link>
					</StyledListItem>
					<StyledListItem>
						<Link href="#" sx={{ textDecoration: 'none' }}>
							Наука
						</Link>
					</StyledListItem>
					<StyledListItem>
						<Link href="#" sx={{ textDecoration: 'none' }}>
							Инновации
						</Link>
					</StyledListItem>
				</Navigation>
			</Bottom>
		</FooterContainer>
	)
}

const FooterContainer = styled('footer')`
	padding: ${({ theme }) => theme.spacing(6, 0)};
	background: linear-gradient(
		${({ theme }) => theme.palette.secondary.light},
		${({ theme }) => theme.palette.secondary.dark}
	);
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.palette.primary.main};
`

const Top = styled(Stack)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: ${({ theme }) => theme.spacing(6)};

	@media (max-width: 768px) {
		flex-direction: column;
		row-gap: ${({ theme }) => theme.spacing(5)};
	}
`

const StyledInput = styled(Box)`
	padding: ${({ theme }) => theme.spacing(1.625, 2)};
	background-color: ${({ theme }) => theme.palette.primary.dark};
	display: flex;
	align-items: center;
`

const Form = styled(FormGroup)`
	display: flex;
	align-items: center;
	flex-direction: row;

	@media (max-width: 500px) {
		flex-direction: column;
		row-gap: ${({ theme }) => theme.spacing(1)};
	}
`

const FormButton = styled(StyledButton)`
	border: 0;
	padding: ${({ theme }) => theme.spacing(2, 3.5)};
	height: auto;
	font-size: 16px;
	line-height: 1;
	margin-left: ${({ theme }) => theme.spacing(2)};

	@media (max-width: 500px) {
		width: 100%;
		margin-left: 0;
	}
`

const Middle = styled(Stack)`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 280px;
	padding-top: ${({ theme }) => theme.spacing(6)};
	border-top: 1px solid ${({ theme }) => theme.palette.border.main};
	margin-bottom: ${({ theme }) => theme.spacing(6)};

	@media (max-width: 1024px) {
		grid-template-columns: 1fr 1fr 1fr;
		row-gap: ${({ theme }) => theme.spacing(6)};
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`

const Title = styled(Typography)`
	font-size: 18px;
	margin-bottom: ${({ theme }) => theme.spacing(3.5)};
`

const StyledList = styled(List)`
	display: flex;
	flex-direction: column;
	font-weight: 500;
	row-gap: ${({ theme }) => theme.spacing(2)};
`

const StyledListItem = styled(ListItem)`
	padding: 0;
	font-family: 'Roboto', sans-serif;
`

const Contacts = styled(Stack)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`

const Storages = styled(Box)`
	display: flex;
	align-items: center;
	column-gap: ${({ theme }) => theme.spacing(1)};
	margin-bottom: ${({ theme }) => theme.spacing(3)};
`

const Socials = styled(Stack)`
	display: flex;
	flex-direction: row;
	column-gap: ${({ theme }) => theme.spacing(1)};
	align-items: center;
`

const Bottom = styled(Stack)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	padding: ${({ theme }) => theme.spacing(6, 0, 2.5, 0)};
	border-top: 1px solid ${({ theme }) => theme.palette.border.main};

	@media (max-width: 768px) {
		flex-direction: column-reverse;
		row-gap: ${({ theme }) => theme.spacing(2)};
	}
`

const Copyright = styled('small')`
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	font-size: 14px;
`

const Navigation = styled(List)`
	display: flex;
	align-items: center;
	column-gap: ${({ theme }) => theme.spacing(3)};
`
