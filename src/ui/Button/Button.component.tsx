import React from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';
import { Icon } from '..';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

export const Button = ({ children, className, onClick, href, appearance, as, icon, ...props }: ButtonProps) => {
	const defaultProps = {
		className: `${styles.button} ${styles[`button${appearance}`]} ${className}`,
		...props
	};

	const iconEl = icon ? <Icon className={styles.icon} icon={icon} /> : '';

	if (as === 'a')
		return <Link href={href as Url} {...defaultProps}><>{iconEl} {children}</></Link>;
	else
		return <button onClick={onClick} {...defaultProps}><>{iconEl} {children}</></button>;
};