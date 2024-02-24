'use client'
import { FormProvider, useForm } from 'react-hook-form'
import { Todo } from '~/types'
import { TodoDetails } from './Details/TodoDetails'
import { useTodos } from '~/hooks/useTodos'

interface Props {}

export const TodoForm: React.FC<Props> = ({}) => {
	const methods = useForm<Todo>()
	const { addTodo } = useTodos({})

	const submitHandler = async (formData: Todo) => {
		console.log(formData, 'hello')

		await addTodo({ ...formData })
	}

	return (
		<FormProvider {...methods}>
			<TodoDetails title='Create Todo' onSubmit={submitHandler} />
		</FormProvider>
	)
}
