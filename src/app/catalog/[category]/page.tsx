import { Menu } from '@/components/Menu/Menu.component';
import { Wordpress } from '@/services/Wordpress.service';
import React from 'react';

const Catalog = async ({ params }: { params: { category: string } }) => {
	const { data: category } = await Wordpress.getMenuCategoryBySlug(params.category);
	const { data: menu } = await Wordpress.getMenuItemByCategory(category[0].id);

	return (
		<>
			{category[0].id}
			<Menu menu={menu} />
		</>
	);
};

export default Catalog;