'use client'
import React, { useEffect } from 'react'
import { TodoDetails } from '../Details/TodoDetails'
import { FormProvider, useForm } from 'react-hook-form'
import { Todo } from '~/types'
import { useTodos } from '~/hooks/useTodos'
import { useParams, useRouter } from 'next/navigation'

export const TodoEditForm = () => {
	const { todoId } = useParams<{ todoId: string }>()

	const router = useRouter()

	const methods = useForm<Todo>()

	const { todo, updateTodo } = useTodos({ todoId })

	const onSubmit = async (formData: Todo) => {
		await updateTodo({ todo: { ...formData } }).then(() => {
			router.back()
		})
	}

	useEffect(() => {
		if (todo) {
			methods.setValue('description', todo.description)
			methods.setValue('title', todo.title)
		}
	}, [todoId, todo])

	return (
		<FormProvider {...methods}>
			<TodoDetails title='Edit Todo' onSubmit={onSubmit} />
		</FormProvider>
	)
}
