import React, { FC } from 'react'
import { Button } from '~/components/UI/Button/Button'
import { Input } from '~/components/UI/Input/Input'
import { Textarea } from '~/components/UI/TextArea/TextArea'

const Page: FC = () => {
	return (
		<div className='layout py-3'>
			<Input label='Title' className='mb-2' />
			<Textarea label='Description' className='mb-2' />

			<Button>Submit</Button>
		</div>
	)
}

export default Page
