import { Board } from "@/components/Board";
import { PlayerRow } from "@/components/PlayerRow";
import type { PieceDataProps, HandleMoveProps } from "@/types/chess";

interface BoardProps {
	squares: (PieceDataProps | null)[][];
	handleMove: ({ pieceData, from, to }: HandleMoveProps) => void;
}

export const BoardWrapper = ({ squares, handleMove }: BoardProps) => {
	return (
		<section className="board-wrapper">
			<PlayerRow name="Black" className="player-1-container" />
			<div className="h-full w-fit ml-8 mb-8">
				<Board squares={squares} handleMove={handleMove} />
			</div>
			<PlayerRow name="White" className="player-2-container" />
		</section>
	);
};
