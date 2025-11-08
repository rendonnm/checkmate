interface PlayerRowProps {
	name: string;
}

export const PlayerRow = ({ name }: PlayerRowProps) => {
	return (
		<article className="ml-8 text-white h-10">
			<p className="font-semibold">{name}</p>
		</article>
	);
};
