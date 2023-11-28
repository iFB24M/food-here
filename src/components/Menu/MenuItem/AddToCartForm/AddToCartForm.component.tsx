'use server';

import { sendForm } from '@/app/createTodo';
import { AddToCartFormProps } from './AddToCartForm.props';

export const AddToCartForm = (props: AddToCartFormProps) => {

	'use server';
	return (
		<form action={sendForm}>
			<input type="text" />
		</form>
	);
}