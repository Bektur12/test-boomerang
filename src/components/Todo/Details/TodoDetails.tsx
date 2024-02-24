import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Button } from '~/components/UI/Button/Button'
import { Input } from '~/components/UI/Input/Input'
import { Textarea } from '~/components/UI/TextArea/TextArea'
import { Todo } from '~/types'

type Details = {
	title: string
	onSubmit: (formData: Todo) => void
}

export const TodoDetails = ({ title, onSubmit }: Details) => {
	const methods = useFormContext<Todo>()

	return (
		<form
			onSubmit={methods.handleSubmit(onSubmit)}
			className='w-full max-w-lg bg-white rounded-lg shadow-md p-8'
		>
			<h1 className='text-3xl font-bold text-center mb-8'>{title}</h1>
			<Input {...methods.register('title')} label='title' />
			<Textarea
				{...methods.register('description')}
				label='description'
			/>
			<div className='flex justify-end'>
				<Button type='submit' size='sm'>
					Save
				</Button>
			</div>
		</form>
	)
}
