// 'use client';

import React from 'react';
import styles from './Logo.module.scss';
import { Icon } from '@/ui';
import { LogoProps } from './Logo.props';
// import { useQuery } from '@tanstack/react-query';
// import { Wordpress } from '@/services/Wordpress.service';
// import { Spinner } from '@/ui/Spinner/Spinner.component';

export const Logo = ({ icon, ...props }: LogoProps) => {
	// const { isLoading, data, error } = useQuery({ queryKey: ['settings'], queryFn: Wordpress.getSettings });

	// if (isLoading) return <Spinner />;
	// if (error) return <>error</>;
	// if (data)
	return (
		<div {...props}>
			<a className={`${styles.logo}`} href="/">
				<Icon icon={icon} size={64} />
				<div className={styles.content}>
					{/* <Title2 className={styles.title}>{data.data.name}</Title2>
						<Body1 className={styles.description}>{data.data.description}</Body1> */}
				</div>
			</a>
		</div>
	);
};