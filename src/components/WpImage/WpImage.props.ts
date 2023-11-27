import { HTMLAttributes } from 'react';


export interface WpImageProps extends HTMLAttributes<HTMLImageElement> {
	idValue: number
	alt: string
}