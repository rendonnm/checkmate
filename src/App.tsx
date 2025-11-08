import { Header } from "./components/Header";
import { Board } from "./components/Board";

export function App() {
	return (
		<div className="h-screen w-screen bg-zinc-900">
			<Header />
			<main className="max-w-3xl mx-auto h-full flex justify-center p-8 ">
				<Board />
			</main>
		</div>
	);
}
