import React from 'react';
import styles from './Icon.module.scss';
import { IconProps } from './Icon.props';

export const Icon = ({ icon, size, className, ...props }: IconProps) => {
	return (
		<i style={{ fontSize: size }} className={`${styles.icon} ${className}`} {...props}>{icon}</i>
	);
};