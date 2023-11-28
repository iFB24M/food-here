import React from 'react';

import { TextProps } from '../_interfaces/Text.props';
import styles from './Body1.module.scss';

export const Body1 = ({ className, ...props }: TextProps) => {
	return <p className={`${styles.body} ${className}`} {...props}></p>;
};