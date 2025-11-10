interface PlayerRowProps {
	name: string;
	className: string;
}

export const PlayerRow = ({ name, className }: PlayerRowProps) => {
	return (
		<article className={`ml-8 text-white ${className} h-10`}>
			<p className="font-semibold">{name}</p>
		</article>
	);
};
