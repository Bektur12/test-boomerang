import { Todo } from '~/types'

interface Props {
	todo: Todo
}

export const TodoItem: React.FC<Props> = ({ todo }) => {
	return (
		<div
			className={`w-full mb-2 p-3 rounded-md border border-gray-300 ${
				todo.completed
					? 'border-cyan-500 bg-cyan-100  dark:bg-cyan-950 dark:border-cyan-950'
					: 'border-gray-300 dark:bg-slate-950 dark:border-slate-950'
			}`}
		>
			<div className='flex justify-between gap-2 mb-2'>
				<div className='text-lg'>{todo.title}</div>
				<div className='flex-shrink-0 flex justify-center items-center h-6 w-6 border-2 border-slate-600 rounded-full cursor-pointer dark:border-slate-300'>
					<div
						className={`h-3 w-3 rounded-full ${
							todo.completed && 'bg-slate-600 dark:bg-slate-300'
						}`}
					></div>
				</div>
			</div>
			<div className='text-sm mb-2'>{todo.description}</div>
			<div className='flex justify-end'>
				<button className='text-xs bg-red-100 px-1 rounded-sm border border-red-300 dark:bg-black dark:border-black dark:border-slate-600'>
					Удалить
				</button>
			</div>
		</div>
	)
}
