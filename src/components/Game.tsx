import { BoardWrapper } from "@/components/BoardWrapper";
import { Movements } from "@/components/Movements";
import { useChess } from "@/hooks/useChess";
import "@/styles/board.css";

export const Game = () => {
	const { squares, handleMove } = useChess();
	return (
		<section className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 w-full md:h-full max-w-5xl mx-auto">
			<BoardWrapper squares={squares} handleMove={handleMove} />
			<Movements />
		</section>
	);
};
