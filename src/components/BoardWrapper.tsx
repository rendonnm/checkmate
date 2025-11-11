import { initSquares } from "@/constants/board";
import { Board } from "@/components/Board";
import { PlayerRow } from "@/components/PlayerRow";
import { useState } from "react";

export const BoardWrapper = () => {
	const [squares, setSquares] = useState(initSquares);

	return (
		<section className="board-wrapper">
			<PlayerRow name="Black" className="player-1-container" />
			<div className="h-full w-fit ml-8 mb-8">
				<Board squares={squares} />
			</div>
			<PlayerRow name="White" className="player-2-container" />
		</section>
	);
};
