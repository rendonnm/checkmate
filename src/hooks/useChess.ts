import { useState } from "react";
import { initSquares } from "@/constants/board";
import type { HandleMoveProps } from "@/types/chess";

export function useChess() {
  const [squares, setSquares] = useState(initSquares);

  function handleMove({ pieceData, from, to }: HandleMoveProps) {
    if (from.row === to.row && from.column === to.column) return;
    setSquares((prev) => {
      const newPrev = [...prev];
      newPrev[from.row][from.column] = null;
      newPrev[to.row][to.column] = pieceData;
      return newPrev;
    });
  }

  return {
    squares,
    handleMove
  }
}