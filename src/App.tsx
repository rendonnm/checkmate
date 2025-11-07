import { useState } from "react";
import { Square } from "./components/Square";

export function App() {
	const initSquares = [
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
	];
	const [squares, setSquares] = useState(initSquares);

	return (
		<div className="bg-zinc-700 h-screen w-screen flex flex-col p-8">
			<main className="max-w-xl mx-auto">
				<h1 className=" text-white text-center font-bold text-5xl mb-10">
					Checkmate! ♛
				</h1>
				<section className="grid grid-cols-8">
					{squares.map((row, offset) => {
						return row.map((_, index) => {
							const color = (index + offset) % 2 === 0 ? "white" : "black";
							return <Square color={color} value={index + offset} />;
						});
					})}
				</section>
			</main>
		</div>
	);
}
