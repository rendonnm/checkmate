import { initSquares } from "@/constants/board";
import { Board } from "@/components/Board";
import { PlayerRow } from "@/components/PlayerRow";
import { useState } from "react";

export const Game = () => {
	const [squares, setSquares] = useState(initSquares);
	return (
		<section className="flex flex-col h-full">
			<PlayerRow name="Black" />
			<div className="flex flex-1">
				<Board squares={squares} />
			</div>
			<PlayerRow name="White" />
		</section>
	);
};
