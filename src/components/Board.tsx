import { yAxisTicks, xAxisTicks } from "@/constants/board";
import type { PieceDataProps } from "@/types/chess";
import { BoardXAxisTicks, BoardYAxisTicks } from "@/components/BoardTicks";
import { Square } from "@/components/Square";

interface BoardProps {
	squares: (PieceDataProps | null)[][];
}

export const Board = ({ squares }: BoardProps) => {
	return (
		<article className="relative grid grid-cols-8 grid-rows-8 shadow-md/10 aspect-square h-full w-fit">
			<BoardYAxisTicks />
			{squares.map((row, r) => {
				return row.map((cell, c) => {
					const color = (c + r) % 2 === 0 ? "bg-[#EAE9D2]" : "bg-[#4B7399]";

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
			<BoardXAxisTicks />
		</article>
	);
};
