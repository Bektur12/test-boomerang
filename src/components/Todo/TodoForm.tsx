'use client'
import { Modal } from '../UI/Modal/Modal'
import { useState } from 'react'

import { useForm } from 'react-hook-form'
import { TodoItem } from '~/types'

interface Props {}

export const TodoForm: React.FC<Props> = ({}) => {
	const [show, setShow] = useState<boolean>(false)

	const methods = useForm<TodoItem>()

	const submitHandler = (formData: TodoItem) => {
		setShow(false)
	}

	return (
		<Modal openLabel='Добавить' showModal={show} setShowModal={setShow}>
			<form className='' onSubmit={methods.handleSubmit(submitHandler)}>
				<div className='mb-5'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='taskTitle'
					>
						Название
					</label>
					<input
						className='appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-slate-900 dark:text-white'
						id='taskTitle'
						type='text'
						placeholder='Название'
						name='title'
					/>
				</div>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='taskDescription'
				>
					Описание
				</label>
				<textarea
					className='appearance-none border border-gray-300 rounded-md w-full py-2 px-3 max-h-80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-slate-900 dark:text-white'
					name='description'
					id='taskDescription'
					rows={10}
					placeholder='Описание'
				></textarea>
				<div className='mt-2 text-center sm:text-left items-center gap-2 sm:flex'>
					<button
						type='button'
						className='w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border border-gray-300 ring-offset-2 ring-gray-600 focus:ring-2 dark:bg-slate-900 dark:text-white'
						onClick={() => setShow(false)}
					>
						Отмена
					</button>
					<button
						type='submit'
						className='w-full mt-2 p-2.5 flex-1 text-white bg-cyan-600 rounded-md outline-none ring-offset-2 ring-cyan-600 focus:ring-2'
					>
						Добавить
					</button>
				</div>
			</form>
		</Modal>
	)
}
