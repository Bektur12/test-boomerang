import { ReactNode } from 'react'

export type Todo = {
	title: string
	description: string
	completed: boolean
	id: number
}

export type LayoutProps = {
	children: ReactNode
}
