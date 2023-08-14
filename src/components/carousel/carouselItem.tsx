import {
	Box,
	Card,
	CardContent,
	Stack,
	Typography,
	styled,
} from '@mui/material'

import Avatar from '@mui/material/Avatar'
import ArtVenue from '../../icons/carouselIcons/ArtVenue.svg'
import User from '../../icons/carouselIcons/User.svg'
import Zoomerr from '../../icons/carouselIcons/Zoomerr.svg'

const CarouselItem = () => {
	return (
		<StyledCard>
			<Logo>
				<Zoomerr />
				<LogoTypography variant="bold">Zoomerr</LogoTypography>
			</Logo>

			<StyledContent>
				<Typography sx={{ fontSize: '18px' }}>
					Исследование гласит, что наличие хороших навыков чтения в детском
					возрасте является предиктором высокого уровня интеллекта у молодых
					взрослых людей.
				</Typography>

				<AvatarBox>
					<StyledAvatar>
						<User />
					</StyledAvatar>
				</AvatarBox>

				<Box>
					<Typography variant="bold" sx={{ fontSize: '24px' }}>
						Петров павел
					</Typography>

					<Typography sx={{ fontSize: '16px' }}>Невролог</Typography>
				</Box>
			</StyledContent>
		</StyledCard>
	)
}

export default CarouselItem

const StyledCard = styled(Card)({
	display: 'flex',
	margin: '16px',
	padding: '24px',
	flexDirection: 'column',
})

const Logo = styled(Stack)({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '8px',
})

const LogoTypography = styled(Typography)(({ theme }) => ({
	fontSize: '24px',
	color: theme.palette.card.main,
}))

const StyledContent = styled(CardContent)({
	display: 'flex',
	flexDirection: 'column',
	textAlign: 'center',
	gap: '16px',
})

const AvatarBox = styled(Box)({
	display: 'flex',
	justifyContent: 'center',
})

const StyledAvatar = styled(Avatar)(({ theme }) => ({
	backgroundColor: theme.palette.primary.dark,
}))
