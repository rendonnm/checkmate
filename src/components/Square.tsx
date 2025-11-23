import type { PieceDataProps, IndexPosition } from "@/types/chess";
import { Piece } from "@/components/Piece";
import { useState } from "react";
import type { HandleMoveProps } from "@/types/chess";

interface SquareProps {
	color: string;
	index: IndexPosition;
	borderRadius: string;
	piece: PieceDataProps | null;
	handleMove: ({ pieceData, from, to }: HandleMoveProps) => void;
}

export const Square = ({
	color,
	index,
	borderRadius,
	piece,
	handleMove,
}: SquareProps) => {
	const [isOptionToDrop, setIsOptionToDrop] = useState(false);
	return (
		<div
			className={`aspect-square ${color} ${borderRadius}  ${isOptionToDrop ? "inset-ring-4 inset-ring-amber-400" : ""}`}
			onDragEnter={(e) => {
				e.preventDefault();
				setIsOptionToDrop(true);
			}}
			onDragLeave={(e) => {
				e.preventDefault();
				setIsOptionToDrop(false);
			}}
			onDragOver={(e) => {
				e.preventDefault();
			}}
			onDrop={(e) => {
				e.preventDefault();
				const pieceData = JSON.parse(e.dataTransfer.getData("piece"));
				const fromIndex = JSON.parse(e.dataTransfer.getData("square"));
				handleMove({ pieceData, from: fromIndex, to: index });
				setIsOptionToDrop(false);
			}}
		>
			{piece && <Piece piece={piece.piece} color={piece.color} index={index} />}
		</div>
	);
};
