import { Tick } from "@/components/Tick";
import { yAxisTicks, xAxisTicks } from "@/constants/board";

export const BoardYAxisTicks = () => {
	return (
		<aside className="absolute -left-8 w-8 h-full grid grid-rows-8 items-center justify-center">
			{yAxisTicks.reverse().map((tick) => {
				return <Tick key={tick} value={tick} />;
			})}
		</aside>
	);
};

export const BoardXAxisTicks = () => {
	return (
		<footer className="absolute -bottom-8 h-8 w-full grid grid-cols-8 text-center">
			{xAxisTicks.map((tick) => {
				return <Tick key={tick} value={tick} />;
			})}
		</footer>
	);
};
