'use client'
import React, { FC } from 'react'
import { TodoForm } from '~/components/Todo/TodoForm'

const Page: FC = () => {
	return (
		<div className='layout py-3'>
			<TodoForm />
		</div>
	)
}

export default Page
