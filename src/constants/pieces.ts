import KingW from '@/assets/pieces/white/king.svg?react'
import QueenW from '@/assets/pieces/white/queen.svg?react'
import RookW from '@/assets/pieces/white/rook.svg?react'
import BishopW from '@/assets/pieces/white/bishop.svg?react'
import KnightW from '@/assets/pieces/white/knight.svg?react'
import PawnW from '@/assets/pieces/white/pawn.svg?react'

import KingB from '@/assets/pieces/black/king.svg?react'
import QueenB from '@/assets/pieces/black/queen.svg?react'
import RookB from '@/assets/pieces/black/rook.svg?react'
import BishopB from '@/assets/pieces/black/bishop.svg?react'
import KnightB from '@/assets/pieces/black/knight.svg?react'
import PawnB from '@/assets/pieces/black/pawn.svg?react'

export const PIECE_SVG = {
  white: { king: KingW, queen: QueenW, rook: RookW, bishop: BishopW, knight: KnightW, pawn: PawnW },
  black: { king: KingB, queen: QueenB, rook: RookB, bishop: BishopB, knight: KnightB, pawn: PawnB },
} as const