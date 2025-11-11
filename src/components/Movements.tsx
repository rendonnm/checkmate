export const Movements = () => {
	const movements = [
		[
			{ move: "e4", piece: "♙" },
			{ move: "e5", piece: "♟︎" },
		],
		[
			{ move: "Nf3", piece: "♘" },
			{ move: "Nc6", piece: "♞" },
		],
	];

	return (
		<article className="bg-blue-950 p-10 text-white rounded-xl">
			<h2 className="font-bold text-2xl mb-4">Moves</h2>
			<section>
				<ol className="list-decimal">
					{movements.map((pair, index) => {
						return (
							<li key={index}>
								<div className="flex gap-10 text-start">
									{pair.map((move, moveIndex) => {
										return (
											<p key={`${index}-${moveIndex}`} className="min-w-[50px]">
												{move.move} {move.piece}
											</p>
										);
									})}
								</div>
							</li>
						);
					})}
				</ol>
			</section>
		</article>
	);
};
