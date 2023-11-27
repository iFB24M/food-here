import React from 'react';
import styles from './Container.module.scss';

export const Container = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
	return <div className={`${styles.container} ${className}`} {...props}></div>;
};