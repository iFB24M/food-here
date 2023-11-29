// 'use client';

import React from 'react';
import styles from './Logo.module.scss';
import { Body1, Icon, Title2 } from '@/ui';
import { LogoProps } from './Logo.props';
import { Wordpress } from '@/services/Wordpress.service';
import Link from 'next/link';

export const Logo = async ({ icon, ...props }: LogoProps) => {
	const { data: settings } = await Wordpress.getSettings();

	if (settings)
		return (
			<div {...props}>
				<Link className={`${styles.logo}`} href="/">
					<Icon icon={icon} size={64} />
					<div className={styles.content}>
						<Title2 className={styles.title}>{settings.name}</Title2>
						<Body1 className={styles.description}>{settings.description}</Body1>
					</div>
				</Link>
			</div>
		);
};