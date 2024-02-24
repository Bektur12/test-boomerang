import React from 'react'
import { TodoList } from '~/components/Todo/TodoList'

const TodoPages: React.FC = () => {
	return (
		<div className='flex flex-col items-center  min-h-screen py-2'>
			<h1 className='text-2xl font-bold mb-4'>TODO List</h1>
			<div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				<TodoList todos={[]} />
			</div>
		</div>
	)
}

export default TodoPages
