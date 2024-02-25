import React, { FC } from 'react'
import { Button } from '../UI/Button/Button'

interface ToolbarProps {
	onReset(): void
	attempts: number
}

const Toolbar: FC<ToolbarProps> = ({ onReset, attempts }) => {
	const getStars = () => {
		const stars = [1, 2, 3].map((item) => {
			return (
				<img
					key={item}
					src='https://img.icons8.com/fluency/25/000000/star.png'
					alt='star'
				/>
			)
		})

		if (attempts > 10) stars.pop()

		return stars
	}
	return (
		<div className='container mx-auto flex justify-between w-3/5'>
			<div>{getStars()}</div>
			<Button onClick={onReset}>
				<img
					src='https://img.icons8.com/ios/20/000000/restart--v2.svg'
					alt='reload'
				/>
			</Button>
		</div>
	)
}

export default Toolbar
