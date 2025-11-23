import type { PieceDataProps } from "@/types/chess";
import { Piece } from "@/components/Piece";
import { useState } from "react";

interface SquareProps {
  color: string;
  borderRadius: string;
  piece: PieceDataProps | null;
}

export const Square = ({ color, borderRadius, piece }: SquareProps) => {
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
    >
      {piece && <Piece piece={piece.piece} color={piece.color} />}
    </div>
  );
};
