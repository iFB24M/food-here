import styles from './Card.module.scss';
import { CardProps } from './Card.props';

export const Card = ({ className, ...props }: CardProps) => {
	return <div className={`${styles.card} ${className}`} {...props}></div>
}