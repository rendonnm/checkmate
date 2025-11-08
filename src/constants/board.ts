export const CHESS_TEAM_COLORS = {
  white: "white",
  black: "black",
} as const;


export const CHESS_PIECES = {
  king: "king",
  queen: "queen",
  rook: "rook",
  bishop: "bishop",
  knight: "knight",
  pawn: "pawn",
} as const;

import type { PieceDataProps } from "../types/chess";

export const initSquares: (PieceDataProps | null)[][] = [
  [{ piece: CHESS_PIECES.rook, color: CHESS_TEAM_COLORS.black }, { piece: CHESS_PIECES.knight, color: CHESS_TEAM_COLORS.black }, { piece: CHESS_PIECES.bishop, color: CHESS_TEAM_COLORS.black }, { piece: CHESS_PIECES.queen, color: CHESS_TEAM_COLORS.black }, { piece: CHESS_PIECES.king, color: CHESS_TEAM_COLORS.black }, { piece: CHESS_PIECES.bishop, color: CHESS_TEAM_COLORS.black }, { piece: CHESS_PIECES.knight, color: CHESS_TEAM_COLORS.black }, { piece: CHESS_PIECES.rook, color: CHESS_TEAM_COLORS.black }],
  [{ piece: CHESS_PIECES.pawn, color: CHESS_TEAM_COLORS.black }, { piece: CHESS_PIECES.pawn, color: CHESS_TEAM_COLORS.black }, { piece: CHESS_PIECES.pawn, color: CHESS_TEAM_COLORS.black }, { piece: CHESS_PIECES.pawn, color: CHESS_TEAM_COLORS.black }, { piece: CHESS_PIECES.pawn, color: CHESS_TEAM_COLORS.black }, { piece: CHESS_PIECES.pawn, color: CHESS_TEAM_COLORS.black }, { piece: CHESS_PIECES.pawn, color: CHESS_TEAM_COLORS.black }, { piece: CHESS_PIECES.pawn, color: CHESS_TEAM_COLORS.black }],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [{ piece: CHESS_PIECES.pawn, color: CHESS_TEAM_COLORS.white }, { piece: CHESS_PIECES.pawn, color: CHESS_TEAM_COLORS.white }, { piece: CHESS_PIECES.pawn, color: CHESS_TEAM_COLORS.white }, { piece: CHESS_PIECES.pawn, color: CHESS_TEAM_COLORS.white }, { piece: CHESS_PIECES.pawn, color: CHESS_TEAM_COLORS.white }, { piece: CHESS_PIECES.pawn, color: CHESS_TEAM_COLORS.white }, { piece: CHESS_PIECES.pawn, color: CHESS_TEAM_COLORS.white }, { piece: CHESS_PIECES.pawn, color: CHESS_TEAM_COLORS.white }],
  [{ piece: CHESS_PIECES.rook, color: CHESS_TEAM_COLORS.white }, { piece: CHESS_PIECES.knight, color: CHESS_TEAM_COLORS.white }, { piece: CHESS_PIECES.bishop, color: CHESS_TEAM_COLORS.white }, { piece: CHESS_PIECES.queen, color: CHESS_TEAM_COLORS.white }, { piece: CHESS_PIECES.king, color: CHESS_TEAM_COLORS.white }, { piece: CHESS_PIECES.bishop, color: CHESS_TEAM_COLORS.white }, { piece: CHESS_PIECES.knight, color: CHESS_TEAM_COLORS.white }, { piece: CHESS_PIECES.rook, color: CHESS_TEAM_COLORS.white }],
];

export const yAxisTicks = ["1", "2", "3", "4", "5", "6", "7", "8"];
export const xAxisTicks = ["a", "b", "c", "d", "e", "f", "g", "h"];