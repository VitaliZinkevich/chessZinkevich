/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chesstools
 * License: MIT, see file 'LICENSE'
 */

import {Text} from "../../lib/svjs-utils/Text.js";


export const COLOR = {
    white: "w",
    black: "b"
}

export const PIECES = {
    rw: "♖", nw: "♘", bw: "♗", qw: "♕", kw: "♔", pw: "♙",
    rb: "♜", nb: "♞", bb: "♝", qb: "♛", kb: "♚", pb: "♟"
};

export class ChessTools {

    static renderSan(san, ply) {
        if (this.colorToMove(ply) === COLOR.white) {
            return Text.replaceAll(san, {"R": PIECES.rw, "N": PIECES.nw, "B": PIECES.bw, "Q": PIECES.qw, "K": PIECES.kw});
        } else {
            return Text.replaceAll(san, {"R": PIECES.rb, "N": PIECES.nb, "B": PIECES.bb, "Q": PIECES.qb, "K": PIECES.kb});
        }
    }

    static colorToMove(plyCount) {
        if (plyCount % 2 === 1) {
            return COLOR.white
        } else {
            return COLOR.black
        }
    }

}