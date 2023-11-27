import { IMenuItem } from "@/interfaces/MenuItem.interface";
import { Container } from "../Container/Container.component";
import { MenuProps } from "./Menu.props";
import { MenuItem } from './MenuItem/MenuItem.component';
import styles from './Menu.module.scss';

export const Menu = async (props: MenuProps) => {
	const { data: products } = await props.menu();

	return (
		<Container className={styles.grid}>
			{products.map((item: IMenuItem) => <MenuItem
				title={item.title.rendered}
				description={item.content.rendered}
				imageId={item.featured_media}
				price={item.acf.price}
				weight={item.acf.weight}
			/>)}

		</Container>
	)
}