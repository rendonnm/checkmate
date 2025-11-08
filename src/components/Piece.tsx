import type { PieceDataProps } from "@/types/chess";
import { PIECE_SVG } from "@/constants/pieces";

export const Piece = ({ piece, color }: PieceDataProps) => {
	const Svg = PIECE_SVG[color][piece];
	return (
		<div className="size-full">
			<Svg />
		</div>
	);
};
