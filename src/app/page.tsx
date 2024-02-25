'use client'
import React, { useEffect, useState } from 'react'
import Toolbar from '../components/Game/Toolbar'
import { shuffleArray } from '~/utils/helpers/shuffleArray'
import Card, { Icard } from '~/components/Game/Card/Card'
import { CARDS } from '~/utils/constants/constants'

interface ISelectedCard extends Icard {
	index: number
}

interface selectedCardState {
	first: ISelectedCard | null
	second: ISelectedCard | null
}

const Game = () => {
	const [count, setCount] = useState({ attempts: 0, correct: 0 })
	const [cards, setCards] = useState(shuffleArray<Icard>(CARDS))
	const [selectedCards, setSelectedCards] = useState<selectedCardState>({
		first: null,
		second: null,
	})

	const onSelectCard = (card: Icard, index: number) => {
		if (selectedCards.first?.index === index) return

		const newCards = [...cards]
		if (!selectedCards.first) {
			newCards[index].isActive = true
			setCards(newCards)
			return setSelectedCards({
				...selectedCards,
				first: { ...card, index },
			})
		}
		if (!selectedCards.second) {
			newCards[index].isActive = true
			setCards(newCards)
			setCount({ ...count, attempts: count.attempts + 1 })
			return setSelectedCards({
				...selectedCards,
				second: { ...card, index },
			})
		}
	}

	const resetCards = () => {
		setSelectedCards({ first: null, second: null })
		const newCards = cards.map(({ icon }) => {
			return { icon, isActive: false, isFound: false }
		})
		setCount({ correct: 0, attempts: 0 })
		setCards(shuffleArray(newCards))
		alert('Reset done!!!')
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			const newCards = [...cards]

			if (selectedCards.first && selectedCards.second) {
				const indexOfFirst = selectedCards.first.index
				const indexOfSecond = selectedCards.second.index
				if (selectedCards.first.icon === selectedCards.second.icon) {
					newCards[indexOfFirst].isActive = false
					newCards[indexOfFirst].isFound = true

					newCards[indexOfSecond].isActive = false
					newCards[indexOfSecond].isFound = true
					setCount({
						correct: count.correct + 1,
						attempts: count.attempts + 1,
					})
					setSelectedCards({ first: null, second: null })
					setCards(newCards)
				} else {
					newCards[indexOfFirst].isActive = false
					newCards[indexOfSecond].isActive = false
					setCards(newCards)
					setSelectedCards({ first: null, second: null })
				}
			}
		}, 800)

		if (count.correct + 1 === 7) {
			clearTimeout(timer)
			alert(
				`OMG You have passed this game with ${
					count.attempts + 1
				} attempts!!!`,
			)
		}

		return () => clearTimeout(timer)
	}, [cards, selectedCards, count])

	return (
		<>
			<Toolbar onReset={resetCards} attempts={count.attempts} />
			<div className='h-590 w-590 p-20 font-Roboto rounded-10 grid grid-cols-4 grid-rows-4 justify-center gap-20 bg-background'>
				{cards.map((card, i) => {
					return (
						<Card
							key={i}
							onClick={() => onSelectCard(card, i)}
							{...card}
						/>
					)
				})}
			</div>
		</>
	)
}

export default Game
