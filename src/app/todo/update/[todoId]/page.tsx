import React, { FC } from 'react'
import { TodoDetails } from '~/components/Todo/Details/TodoDetails'

const Page: FC = () => {
	return (
		<div>
			<TodoDetails title='Edit Todo' onSubmit={() => {}} />
		</div>
	)
}

export default Page
