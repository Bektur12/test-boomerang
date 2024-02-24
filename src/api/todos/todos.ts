import { Todo, TodoItem } from '~/types'
import { baseAxios } from '../axios/baseAxios'

export const getTodos = async () => {
	const response = await baseAxios.get('/todos')
	return response.data
}

export const addTodoItem = async (todo: TodoItem) => {
	const response = await baseAxios.post('/todos', todo)
	return response.data
}

export const updateTodoItem = async (todo: Todo) => {
	const response = await baseAxios.patch(`/todos/${todo.id}`, todo)
	return response.data
}

export const deleteTodoItem = async (id: TodoItem) => {
	const response = await baseAxios.delete(`/todos/${id}`)
	return response.data
}
