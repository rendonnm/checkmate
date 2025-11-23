import { CHESS_TEAM_COLORS, CHESS_PIECES } from "@/constants/board";

export type ChessTeamColor =
  (typeof CHESS_TEAM_COLORS)[keyof typeof CHESS_TEAM_COLORS];

export type ChessPiece = (typeof CHESS_PIECES)[keyof typeof CHESS_PIECES];

export interface PieceProps {
  piece: ChessPiece;
}

export interface PieceDataProps extends PieceProps {
  color: ChessTeamColor;
  index: IndexPosition
}

type Row = number
type Column = number

export interface IndexPosition {
  row: Row
  column: Column
}

export interface HandleMoveProps {
  pieceData: PieceDataProps;
  from: IndexPosition;
  to: IndexPosition;
}