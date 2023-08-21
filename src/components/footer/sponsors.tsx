import { Stack, styled } from '@mui/material'
import React from 'react'
import ShellsIcon from '../../assets/icons/shells.svg'
import SmartFinderIcon from '../../assets/icons/smart-finder.svg'
import ZoomerrIcon from '../../assets/icons/zoomerr.svg'
import ArtVenueIcon from '../../assets/icons/art-venue.svg'
import KontrastrIcon from '../../assets/icons/kontrastr.svg'
import WavesMarathonIcon from '../../assets/icons/waves-marathon.svg'
import Link from 'next/link'

const icons = [
	<ShellsIcon />,
	<SmartFinderIcon />,
	<ZoomerrIcon />,
	<ArtVenueIcon />,
	<KontrastrIcon />,
	<WavesMarathonIcon />,
]

export default function Sponsors() {
	return (
		<StyledStack direction="row">
			{icons.map((icon) => (
				<Link href="#">{icon}</Link>
			))}
		</StyledStack>
	)
}

const StyledStack = styled(Stack)`
	background: linear-gradient(
		${({ theme }) => theme.palette.secondary.light},
		${({ theme }) => theme.palette.secondary.dark}
	);
	padding: ${({ theme }) => theme.spacing(10, 0)};
	display: grid;
	grid-template-columns: repeat(6, auto);
	justify-content: center;
	column-gap: ${({ theme }) => theme.spacing(7.5)};

	@media (max-width: 1300px) {
		grid-template-columns: repeat(3, auto);
		row-gap: ${({ theme }) => theme.spacing(4)};
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, auto);
		row-gap: ${({ theme }) => theme.spacing(5)};
	}

	@media (max-width: 500px) {
		grid-template-columns: repeat(1, auto);
		row-gap: ${({ theme }) => theme.spacing(6)};
	}
`
