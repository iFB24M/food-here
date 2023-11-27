import { HTMLAttributes } from 'react';
import styles from './Container.module.scss';

export const Container = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return <div className={`${styles.container} ${className}`} {...props}></div>
}