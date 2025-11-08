import { useState } from "react";
import { Square } from "./Square";
import { initSquares, xAxisTicks, yAxisTicks } from "../constants/board";
import { Tick } from "./Tick";
import { PlayerRow } from "./PlayerRow";

export const Board = () => {
	const [squares, setSquares] = useState(initSquares);

	return (
		<section>
			<PlayerRow name="Black" />
			<article className="flex h-[592px] mr-8 mb-8">
				<aside className="w-8 grid grid-rows-8 items-center justify-center">
					{yAxisTicks.map((tick) => {
						return <Tick value={tick} />;
					})}
				</aside>
				<div>
					<article className="grid grid-cols-8">
						{squares.map((row, offset) => {
							return row.map((_, index) => {
								const color =
									(index + offset) % 2 === 0 ? "bg-white" : "bg-black";

								let borderRadius = "";
								if (offset === 0 && index === 0) {
									borderRadius = "rounded-tl-sm";
								} else if (offset === 0 && index === 7) {
									borderRadius = "rounded-tr-sm";
								} else if (offset === 7 && index === 0) {
									borderRadius = "rounded-bl-sm";
								} else if (offset === 7 && index === 7) {
									borderRadius = "rounded-br-sm";
								}
								return <Square color={color} borderRadius={borderRadius} />;
							});
						})}
					</article>
					<footer className="h-8 grid grid-cols-8 text-center">
						{xAxisTicks.map((tick) => {
							return <Tick value={tick} />;
						})}
					</footer>
				</div>
			</article>
			<PlayerRow name="White" />
		</section>
	);
};
