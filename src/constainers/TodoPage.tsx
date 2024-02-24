import { TodoForm } from '~/components/Todo/TodoForm'
import { TodoList } from '~/components/Todo/TodoList'

export const TodoPages: React.FC = () => {
	return (
		<div className='max-w-3xl mx-auto bg-white p-5 md:p-10 md:rounded-3xl rounded-xl dark:bg-slate-900 dark:text-white'>
			<div className='flex md:flex-row flex-col gap-5 justify-between mb-5'>
				<TodoForm />
			</div>
			<TodoList todos={[]} />
		</div>
	)
}
