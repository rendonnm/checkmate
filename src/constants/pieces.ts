import KingW from "@/assets/pieces/white/king.svg";
import QueenW from "@/assets/pieces/white/queen.svg";
import RookW from "@/assets/pieces/white/rook.svg";
import BishopW from "@/assets/pieces/white/bishop.svg";
import KnightW from "@/assets/pieces/white/knight.svg";
import PawnW from "@/assets/pieces/white/pawn.svg";

import KingB from "@/assets/pieces/black/king.svg";
import QueenB from "@/assets/pieces/black/queen.svg";
import RookB from "@/assets/pieces/black/rook.svg";
import BishopB from "@/assets/pieces/black/bishop.svg";
import KnightB from "@/assets/pieces/black/knight.svg";
import PawnB from "@/assets/pieces/black/pawn.svg";

export const PIECE_SVG = {
  white: {
    king: KingW,
    queen: QueenW,
    rook: RookW,
    bishop: BishopW,
    knight: KnightW,
    pawn: PawnW,
  },
  black: {
    king: KingB,
    queen: QueenB,
    rook: RookB,
    bishop: BishopB,
    knight: KnightB,
    pawn: PawnB,
  },
} as const;
