import { Card, Title3 } from '@/ui';
import styles from './MenuItem.module.scss';
import { MenuItemProps } from './MenuItem.props';
import { WpImage } from '@/components/WpImage/WpImage.component';

export const MenuItem = (props: MenuItemProps) => {
	return (
		<a href={`/catalog/${props.slug}`}>
			<Card className={styles.body}>
				<picture>
					<WpImage idValue={props.imageId} className={styles.image} alt={props.title} />
				</picture>
				<div className={styles.info}>
					<Title3 className={styles.title}>{props.title}</Title3>
					<Title3 className={styles.price}>{props.price} руб. <span>за {props.weight} гр.</span></Title3>
				</div>
			</Card>
		</a>
	)
}