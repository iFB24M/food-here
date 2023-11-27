"use client"

import { Container } from "../Container/Container.component";
import { MenuItem } from './MenuItem/MenuItem.component';
import styles from './Menu.module.scss';
import { useQuery } from "@tanstack/react-query";
import { Wordpress } from "@/services/Wordpress.service";
import { Spinner } from "@/ui/Spinner/Spinner.component";
import { Card, Title3 } from '@/ui';

export const Menu = () => {
	const { isLoading, data, error } = useQuery({ queryKey: ['posts'], queryFn: Wordpress.getMenu })
	const { isLoading: isCategoriesLoading, data: categories, isError: categoriesError } =
		useQuery({ queryKey: ['categories'], queryFn: Wordpress.getMenuCategories })

	if (error) return <>{error.message}</>
	return (
		<Container className={styles.container}>
			<div className={styles.menu}>
				<Title3>Категории</Title3>
				<Card size="big">
					{isLoading ? <Spinner /> : ''}
					{categories ? categories.data.map((item) => item.name) : ''}
				</Card>
			</div>
			<div className={styles.grid}>
				{isLoading ? <Spinner /> : ''}
				{data ? data.data.map((item) => <MenuItem
					key={item.id}
					title={item.title.rendered}
					description={item.content.rendered}
					imageId={item.featured_media}
					price={item.acf.price}
					weight={item.acf.weight}
					slug={item.slug}
				/>) : ''}
			</div>

		</Container>
	)
}