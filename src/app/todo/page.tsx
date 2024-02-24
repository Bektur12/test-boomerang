'use client'
import React from 'react'
import { TodoList } from '~/components/Todo/TodoList'
import { useTodos } from '~/hooks/useTodos'

const TodoPages: React.FC = () => {
	const { todos } = useTodos({})
	return (
		<div className='flex flex-col items-center  min-h-screen py-2'>
			<h1 className='text-2xl font-bold mb-4'>TODO List</h1>
			<div>
				<TodoList todos={todos} />
			</div>
		</div>
	)
}

export default TodoPages
