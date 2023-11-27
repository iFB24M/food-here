import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

export const Button = ({ className, onClick, href, appearance, as, ...props }: ButtonProps) => {
	const defaultProps = {
		className: `${styles.button} ${styles[`button${appearance}`]} ${className}`,
		...props
	}

	if (as === 'a')
		return <a href={href} {...defaultProps}></a>
	else
		return <button onClick={onClick} {...defaultProps}></button>
}