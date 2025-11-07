interface SquareProps {
	color: string;
	value: number;
}

export const Square = ({ color }: SquareProps) => {
	return <div className={`size-12 ${`bg-${color}`}`}></div>;
};
