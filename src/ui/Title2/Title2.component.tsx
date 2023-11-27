import React from 'react';

import { TextProps } from '../_interfaces/Text.props';
import styles from './Title2.module.scss';

export const Title2 = ({ className, ...props }: TextProps) => {
	return <h2 className={`${styles.title} ${className}`} {...props}></h2>;
};