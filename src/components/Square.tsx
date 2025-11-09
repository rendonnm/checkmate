import type { PieceDataProps } from "@/types/chess";
import { Piece } from "@/components/Piece";

interface SquareProps {
	color: string;
	borderRadius: string;
	piece: PieceDataProps | null;
}

export const Square = ({ color, borderRadius, piece }: SquareProps) => {
	return (
		<div className={`aspect-square ${color} ${borderRadius}`}>
			{piece && <Piece piece={piece.piece} color={piece.color} />}
		</div>
	);
};
