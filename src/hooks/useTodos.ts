import { QUERY_KEY } from '~/utils/constants/constants'
import {
	addTodoItem,
	deleteTodoItem,
	getTodos,
	getTodosById,
	updateTodoItem,
} from '../api/todos/todos'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

export const useTodos = ({ todoId }: { todoId?: string }) => {
	const queryClient = useQueryClient()

	const { data: todos } = useQuery({
		queryKey: [QUERY_KEY],
		queryFn: getTodos,
	})

	const { data: todo } = useQuery({
		queryKey: [QUERY_KEY, todoId],
		queryFn: () => getTodosById(todoId as string),
	})
	const addTodoMutation = useMutation({
		mutationFn: addTodoItem,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
		},
	})

	const updateTodoMutation = useMutation({
		mutationFn: (data: { todo: any }) =>
			updateTodoItem(Number(todoId), data.todo),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
		},
	})

	const deleteTodoMutation = useMutation({
		mutationFn: (todoId: number) => deleteTodoItem(todoId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
		},
	})

	return {
		todos,
		todo,
		addTodo: addTodoMutation.mutateAsync,
		updateTodo: updateTodoMutation.mutateAsync,
		deleteTodo: deleteTodoMutation.mutateAsync,
	}
}
