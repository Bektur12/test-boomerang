import { Todo } from '~/types'
import { TodoItem } from './TodoItem'

interface Props {
	todos: Todo[]
}

export const TodoList: React.FC<Props> = ({ todos }) => {
	return (
		<>
			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</>
	)
}
