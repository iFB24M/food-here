'use client';

import React, { useState } from 'react';

import { ReadMoreProps } from './ReadMore.props';
import styles from './ReadMore.module.scss';

export const ReadMore = ({ content, wrapperClassName, className, ...props }: ReadMoreProps) => {
	const [descriptionClass, setDescriptionClass] = useState('');

	const toggleDescription = (value: string) => descriptionClass ? setDescriptionClass('') : setDescriptionClass(value);

	return (
		<div className={wrapperClassName}>
			<div {...props} className={`${className} ${styles.description} ${descriptionClass}`} dangerouslySetInnerHTML={{ __html: content }}>
			</div>
			<button className={styles.toggleButton} onClick={() => toggleDescription(styles.opened)}>Развернуть</button>
		</div>
	);
};