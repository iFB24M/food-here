import { Card, Title3 } from '@/ui';
import styles from './MenuItem.module.scss';
import { MenuItemProps } from './MenuItem.props';
import { Wordpress } from '@/services/Wordpress.service';

export const MenuItem = async (props: MenuItemProps) => {
	const { data: image } = await Wordpress.getMediaById(props.imageId);

	console.log(props.imageId);

	return (
		<a href="">
			<Card className={styles.body}>
				<picture>
					<img className={styles.image} src={image.guid.rendered} alt="Заголовок" />
				</picture>
				<div className={styles.info}>
					<Title3 className={styles.title}>{props.title}</Title3>
					<Title3 className={styles.price}>{props.price} руб. <span>за {props.weight} гр.</span></Title3>
				</div>
			</Card>
		</a>
	)
}