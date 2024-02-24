import React, { FC } from 'react'
import Header from '~/layout/Header'
import '../styles/globals.scss'
import { LayoutProps } from '~/types'

const RootLayout: FC<LayoutProps> = ({ children }) => {
	return (
		<html>
			<head>
				<title>Todo App</title>
			</head>
			<body>
				<main>
					<Header />
					{children}
				</main>
			</body>
		</html>
	)
}

export default RootLayout
