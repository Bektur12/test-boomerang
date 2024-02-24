import { ReactNode } from 'react'

export type Todo = {
	title: string
	description: string
	id: number
}

export type LayoutProps = {
	children: ReactNode
}
