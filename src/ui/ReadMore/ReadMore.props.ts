import { HTMLAttributes } from 'react';

export interface ReadMoreProps extends HTMLAttributes<HTMLDivElement> {
	content: string,
	wrapperClassName?: string
}