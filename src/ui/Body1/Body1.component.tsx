import { TextProps } from '../_interfaces/Text.props';
import styles from './Body1.module.scss';

export const Body1 = ({ className, ...props }: TextProps) => {
	return <p className={`${styles.title} ${className}`} {...props}></p>
}