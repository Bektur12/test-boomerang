import React, { FC } from 'react'
import EmblaCarousel from '~/components/UI/Carousel/Slider'
import { SLIDES } from '~/utils/constants/constants'
const Page: FC = () => {
	const OPTIONS = {}

	return (
		<div className='flex w-full items-center justify-center h-screen bg-slate-300'>
			<EmblaCarousel slides={SLIDES} options={OPTIONS} />
		</div>
	)
}

export default Page
