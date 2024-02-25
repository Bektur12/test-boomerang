'use client'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '~/components/UI/Button/Button'
import { useTodos } from '~/hooks/useTodos'

const Page = () => {
	const { todoId } = useParams()
	const router = useRouter()

	const { todo = {}, deleteTodo } = useTodos({ todoId: todoId as string })

	const handleDeleteTodo = async () => {
		try {
			await deleteTodo(Number(todoId)).then(() => {
				router.back()
			})
		} catch (error) {}
	}

	return (
		<div className='flex justify-center items-center h-screen'>
			<div className={`w-96 mb-2 p-5 rounded-md border border-gray-300 `}>
				<div className='flex justify-between items-center gap-2 mb-4'>
					<div className='text-lg'>Title: {todo.title}</div>
				</div>
				<p className='text-sm mb-2'>Description: {todo.description}</p>
				<div className='flex justify-end gap-10'>
					<Button size={'sm'} onClick={handleDeleteTodo}>
						Удалить
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Page
