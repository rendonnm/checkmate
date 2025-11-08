interface SquareProps {
	color: string;
	borderRadius: string;
}

export const Square = ({ color, borderRadius }: SquareProps) => {
	return <div className={`size-[74px] ${color} ${borderRadius}`}></div>;
};
