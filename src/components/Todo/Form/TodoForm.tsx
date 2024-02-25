'use client'
import { FormProvider, useForm } from 'react-hook-form'
import { Todo } from '~/types'
import { TodoDetails } from '../Details/TodoDetails'
import { useTodos } from '~/hooks/useTodos'
import { useRouter } from 'next/navigation'

interface Props {}

export const TodoForm: React.FC<Props> = ({}) => {
	const methods = useForm<Todo>()
	const { addTodo } = useTodos({})
	const router = useRouter()

	const submitHandler = async (formData: Todo) => {
		await addTodo({ ...formData }).then(() => {
			router.back()
		})
	}

	return (
		<FormProvider {...methods}>
			<TodoDetails title='Create Todo' onSubmit={submitHandler} />
		</FormProvider>
	)
}
