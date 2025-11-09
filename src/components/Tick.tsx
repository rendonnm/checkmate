interface TickProps {
	value: string;
}

export const Tick = ({ value }: TickProps) => {
	return (
		<p className="font-semibold text-[#a1a1a1] text-md select-none">{value}</p>
	);
};
