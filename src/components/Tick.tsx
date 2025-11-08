interface TickProps {
	value: string;
}

export const Tick = ({ value }: TickProps) => {
	return <p className="font-semibold text-zinc-300 text-md">{value}</p>;
};
