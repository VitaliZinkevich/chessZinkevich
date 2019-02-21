/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/chess-console
 * License: MIT, see file 'LICENSE'
 */

import {Observe} from "../../../lib/svjs-observe/Observe.js"
import {Component} from "../../../lib/svjs-app/Component.js"
import {Event} from "../../../lib/svjs-utils/Event.js"
import {ChessTools} from "../../../lib/cm-chesstools/ChessTools.js"

export class History extends Component {

    constructor(module) {
        super(module)

        this.element = document.createElement("div")
        this.element.setAttribute("class", "history")
        this.module.componentContainers.left.appendChild(this.element)

        this.state = module.state
        this.state.observeChess(() => {
            this.redraw()
        })
        Observe.property(module.state, "plyViewed", () => {
            this.redraw()
        })
        Event.delegate(this.element, "click", ".ply", (event) => {
            this.state.plyViewed = parseInt(event.target.getAttribute("data-ply"), 10)
        })
        this.redraw()
    }

    redraw() {
        window.clearTimeout(this.redrawDebounce)
        this.redrawDebounce = setTimeout(() => {
            const history = this.state.chess.history()
            let sanWhite
            let sanBlack
            let output = ""
            let i
            let rowClass = ""
            let whiteClass = ""
            let blackClass = ""
            for (i = 0; i < history.length; i += 2) {
                sanWhite = history[i]
                // console.log(sanWhite);
                if (sanWhite) {
                    sanWhite = ChessTools.renderSan(sanWhite, 1)
                }
                sanBlack = history[i + 1]
                if (sanBlack) {
                    sanBlack = ChessTools.renderSan(sanBlack, 0)
                } else {
                    sanBlack = ""
                }
                if (this.state.plyViewed < i + 1) {
                    rowClass = "text-muted"
                    whiteClass = "text-muted"
                }
                if (this.state.plyViewed < i + 2) {
                    blackClass = "text-muted"
                }
                if (this.state.analyseStartIndex) {
                    if (this.state.analyseStartIndex < i + 1) {
                        whiteClass += " text-primary"
                    }
                    if (this.state.analyseStartIndex < i + 2) {
                        blackClass += " text-primary"
                    }
                }
                output += "<tr><td class='num " + rowClass + "'>" + (i / 2 + 1) + ".</td><td data-ply='" + (i + 1) + "' class='ply " + whiteClass + " ply" + (i + 1) + "'>" + sanWhite + "</td><td data-ply='" + (i + 2) + "' class='ply " + blackClass + " ply" + (i + 2) + "'>" + sanBlack + "</td></tr>"
            }
            this.element.innerHTML = "<table>" + output + "</table>"
            if (this.state.plyViewed > 0) {
                const $ply = $(this.element).find('.ply' + this.state.plyViewed)
                if ($ply.position()) {
                    this.element.scrollTop = 0
                    this.element.scrollTop = ($ply.position().top - 68)
                }
            }
        })
    }
}