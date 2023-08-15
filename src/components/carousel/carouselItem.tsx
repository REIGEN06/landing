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
import { carouselItem } from './carouselArray'

const CarouselItem = ({ logo, content, name, job }: carouselItem) => {
	return (
		<StyledCard>
			<Logo>
				{logo === 'Zoomerr' ? <Zoomerr /> : <ArtVenue />}
				<LogoTypography variant="bold">{logo}</LogoTypography>
			</Logo>

			<StyledContent>
				<Typography sx={{ fontSize: '18px' }}>{content}</Typography>

				<AvatarBox>
					<StyledAvatar>
						<User />
					</StyledAvatar>
				</AvatarBox>

				<Box>
					<Typography variant="bold" sx={{ fontSize: '24px' }}>
						{name}
					</Typography>

					<Typography sx={{ fontSize: '16px' }}>{job}</Typography>
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
	paddingBottom: '0px',
	height: '100%',
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
