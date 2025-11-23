import type { PieceDataProps } from "@/types/chess";
import { PIECE_SVG } from "@/constants/pieces";

export const Piece = ({ piece, color, index }: PieceDataProps) => {
	const svgSrc = PIECE_SVG[color][piece];
	return (
		<div className="size-full cursor-grab active:bg-blue-400 dragging:opacity-50">
			<img
				className="select-none"
				src={svgSrc}
				alt={`${color} ${piece} icon`}
				onDragStart={(e) => {
					e.dataTransfer.effectAllowed = "move";
					e.dataTransfer.setData("piece", JSON.stringify({ piece, color }));
					e.dataTransfer.setData("square", JSON.stringify(index));
				}}
			/>
		</div>
	);
};
