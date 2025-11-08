import { useState } from "react";
import { Square } from "@/components/Square";
import { initSquares, xAxisTicks, yAxisTicks } from "../constants/board";
import { Tick } from "@/components/Tick";
import { PlayerRow } from "@/components/PlayerRow";

export const Board = () => {
	const [squares, setSquares] = useState(initSquares);

	return (
		<section>
			<PlayerRow name="Black" />
			<article className="flex h-[592px] mr-8 mb-8">
				<aside className="w-8 grid grid-rows-8 items-center justify-center">
					{yAxisTicks.reverse().map((tick) => {
						return <Tick key={tick} value={tick} />;
					})}
				</aside>
				<div>
					<article className="grid grid-cols-8 shadow-2xl">
						{squares.map((row, r) => {
							return row.map((cell, c) => {
								const color =
									(c + r) % 2 === 0 ? "bg-[#EAE9D2]" : "bg-[#4B7399]";

								let borderRadius = "";
								if (r === 0 && c === 0) {
									borderRadius = "rounded-tl-sm";
								} else if (r === 0 && c === 7) {
									borderRadius = "rounded-tr-sm";
								} else if (r === 7 && c === 0) {
									borderRadius = "rounded-bl-sm";
								} else if (r === 7 && c === 7) {
									borderRadius = "rounded-br-sm";
								}
								return (
									<Square
										key={`${xAxisTicks[c]}${yAxisTicks[r]}`}
										color={color}
										borderRadius={borderRadius}
										piece={cell}
									/>
								);
							});
						})}
					</article>
					<footer className="h-8 grid grid-cols-8 text-center">
						{xAxisTicks.map((tick) => {
							return <Tick key={tick} value={tick} />;
						})}
					</footer>
				</div>
			</article>
			<PlayerRow name="White" />
		</section>
	);
};
