import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { Button, IconButton, Stack, styled } from '@mui/material'
import CarouselItem from './carouselItem'
import ArrowLeft from '../../icons/carouselIcons/ArrowLeft.svg'
import ArrowRight from '../../icons/carouselIcons/ArrowRight.svg'
import { carouselArray, carouselItem } from './carouselArray'
import { useRef } from 'react'

import 'swiper/css'
import 'swiper/css/navigation'

const Carousel = () => {
	const swiperRef = useRef<SwiperRef>(null)

	const Prev = () => {
		if (!swiperRef.current) return false

		swiperRef.current.swiper.slidePrev()
	}

	const Next = () => {
		if (!swiperRef.current) return false

		swiperRef.current.swiper.slideNext()
	}

	return (
		<StyledStack>
			<IconButton onClick={Prev}>
				<ArrowLeft />
			</IconButton>
			<StyledSwiper
				spaceBetween={0}
				slidesPerView={1}
				ref={swiperRef}
				loop
				breakpoints={{
					768: {
						slidesPerView: 2,
					},
				}}
			>
				{carouselArray.map((item: carouselItem) => (
					<StyledSlide key={item.name}>
						<CarouselItem {...item} />
					</StyledSlide>
				))}
			</StyledSwiper>

			<IconButton onClick={Next}>
				<ArrowRight />
			</IconButton>
		</StyledStack>
	)
}

export default Carousel

const StyledStack = styled(Stack)(({ theme }) => ({
	background: `linear-gradient(180deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.dark} 100%)`,
	padding: '80px',
	flexDirection: 'row',
	alignItems: 'center',
	'@media (max-width: 1024px)': {
		padding: '8px 20px',
	},
}))

const StyledSwiper = styled(Swiper)({
	width: '100%',
	'&.swiper-button-prev:after': {
		color: 'red',
		width: '666px',
	},
})

const StyledSlide = styled(SwiperSlide)({
	'&.swiper-slide': {
		height: 'auto',
	},
})
