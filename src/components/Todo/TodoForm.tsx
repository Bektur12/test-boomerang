import { Modal } from '../UI/Modal/Modal'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../UI/Button/Button'
import { Todo } from '~/types'

interface Props {}

export const TodoForm: React.FC<Props> = ({}) => {
	const [show, setShow] = useState<boolean>(false)

	const methods = useForm<Todo>()

	const submitHandler = (formData: Todo) => {
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
					<Button>Отмена</Button>
					<Button>Создать</Button>
				</div>
			</form>
		</Modal>
	)
}
