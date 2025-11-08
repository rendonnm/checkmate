import { Header } from "@//components/Header";
import { Board } from "@/components/Board";

export function App() {
	return (
		<div className="flex flex-col h-screen w-screen bg-zinc-900 overflow-hidden">
			<Header />
			<main className="w-full h-full flex flex-col p-8 overflow-auto">
				<Board />
			</main>
		</div>
	);
}
