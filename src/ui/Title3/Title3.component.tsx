import { TextProps } from '../_interfaces/Text.props';
import styles from './Title3.module.scss';

export const Title3 = ({ className, ...props }: TextProps) => {
	return <h3 className={`${styles.title} ${className}`} {...props}></h3>
}