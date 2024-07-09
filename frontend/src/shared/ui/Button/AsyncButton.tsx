import { Spinner } from '../Spinner/Spinner';
import { Button } from './Button';

interface AsyncButtonProps {
	title: string;
	onClick: () => void;
	isLoading: boolean;
	width?: string;
	spinnerSize?: string;
}

export function AsyncButton({
	title,
	onClick,
	isLoading,
	width,
	spinnerSize,
}: AsyncButtonProps) {
	return (
		<Button onClick={onClick} disabled={isLoading} width={width}>
			{isLoading ? <Spinner size={spinnerSize} /> : title}
		</Button>
	);
}
