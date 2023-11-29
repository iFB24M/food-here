// 'use client';

import React from 'react';

import { Container } from '../Container/Container.component';
import { MenuItem } from './MenuItem/MenuItem.component';
import styles from './Menu.module.scss';
import { Wordpress } from '@/services/Wordpress.service';
import { Card, Title3 } from '@/ui';
import { GetServerSideProps } from 'next';
import { IMenuItem } from '@/interfaces/MenuItem.interface';
import Link from 'next/link';

export const getServerSideProps: GetServerSideProps = async () => {
	const menuItems = await Wordpress.getMenu();

	return {
		props: { menuItems }
	};
};


export const Menu = async ({ menu }: { menu: IMenuItem[] }) => {

	const { data: categories } = await Wordpress.getMenuCategories();

	console.log(menu);

	return (
		<Container className={styles.container}>
			<div className={styles.menu}>
				<Title3>Категории</Title3>
				<Card size="big">
					<ul className={styles.categories}>
						{categories ? categories.map((item) => <li key={item.id}><Link href={`/catalog/${item.slug}`}>{item.name}</Link></li>) : ''}
					</ul>
				</Card>
			</div>
			<div className={styles.grid}>
				{menu ? menu.map((item) => <MenuItem
					key={item.id}
					id={item.id}
					title={item.title.rendered}
					description={item.content.rendered}
					imageId={item.featured_media}
					price={item.acf.price}
					weight={item.acf.weight}
					slug={item.slug}
				/>) : ''}
			</div>

		</Container>
	);
};