import type { PieceDataProps } from "@/types/chess";
import { PIECE_SVG } from "@/constants/pieces";

export const Piece = ({ piece, color }: PieceDataProps) => {
	const Svg = PIECE_SVG[color][piece];
	return (
		<div className="size-full cursor-grab active:bg-blue-400 dragging:opacity-50">
			<Svg className="shadow" />
		</div>
	);
};
