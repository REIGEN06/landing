import {
	Grid,
	InputAdornment,
	MenuItem,
	TextField,
	Typography,
	useTheme,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import SearchNavbarIcon from '../../assets/icons/navbarIcons/SearchNavbar.svg'
import StyledButton from '../StyledButton'

const SearchBar = () => {
	const theme = useTheme()

	const categories = [
		{
			value: 0,
			label: 'Все категории',
		},
		{
			value: 1,
			label: 'Тонометры',
		},
		{
			value: 2,
			label: 'Дерматология',
		},
		{
			value: 3,
			label: 'Инфекционные болезни',
		},
		{
			value: 4,
			label: 'Кардиология',
		},
		{
			value: 5,
			label: 'Неврология',
		},
		{
			value: 6,
			label: 'Общая медицина',
		},
		{
			value: 7,
			label: 'Терапия',
		},
		{
			value: 8,
			label: 'Хирургия',
		},
	]

	return (
		<>
			<Grid container rowSpacing={1}>
				<Grid item xs={12} md={9}>
					<TextField
						fullWidth
						label="Поиск"
						variant="outlined"
						InputProps={{
							sx: {
								borderRadius: 0,
								height: 48,
							},
							startAdornment: (
								<InputAdornment position="start">
									<SearchNavbarIcon />
								</InputAdornment>
							),
						}}
						sx={{
							backgroundColor: theme.palette.primary.dark,
						}}
					/>
				</Grid>

				<Grid item xs={12} md={3}>
					<TextField
						fullWidth
						select
						variant="outlined"
						defaultValue="0"
						InputProps={{
							sx: { borderRadius: 0, height: 48 },
						}}
						sx={{
							backgroundColor: theme.palette.primary.dark,
						}}
					>
						{categories.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
				</Grid>
			</Grid>

			<SearchButton fullWidth variant="contained">
				<Typography variant="medium">Поиск</Typography>
			</SearchButton>
		</>
	)
}

export default SearchBar

const SearchButton = styled(StyledButton)(({ theme }) => ({
	display: 'flex',
	height: theme.spacing(6),
	margin: theme.spacing(1),
	padding: theme.spacing(2, 1.5),
	maxWidth: '105px',

	'@media (max-width: 1024px)': {
		maxWidth: '1024px',
	},
}))
