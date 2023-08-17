import { styled } from '@mui/material'
import TIcon from '../../assets/icons/t.svg'

export function LoaderIcon() {
	return (
		<LoaderContainer>
			<StyledLoader>
				<StyledTIcon />
			</StyledLoader>
		</LoaderContainer>
	)
}

const LoaderContainer = styled('div')`
	height: 220px;
	position: relative;
	background-color: #f3f7ff;
`

const StyledLoader = styled('div')`
	height: 37px;
	width: 56px;
	position: relative;
	background-color: transparent;
	top: 50%;
	left: 50%;
	z-index: 5;
	overflow: hidden;
	transform: translate(-50%, -50%);

	&:after {
		content: '';
		position: absolute;
		height: 30px;
		width: 49px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #f3f7ff;
		z-index: 1;
	}

	&::before {
		content: '';
		position: absolute;
		height: 70px;
		width: 70px;
		background-image: radial-gradient(
			at top left,
			rgba(69, 143, 246, 0%),
			rgba(69, 143, 246, 100%)
		);
		top: -40%;
		left: -10%;
		z-index: -1;
		animation: animate 1.5s infinite linear;
	}

	@keyframes animate {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(1turn);
		}
	}
`

const StyledTIcon = styled(TIcon)`
	position: absolute;
	width: 17px;
	height: 27px;
	top: 60%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
`
