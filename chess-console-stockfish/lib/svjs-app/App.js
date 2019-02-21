/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */

let app = null

export class App {

    constructor(props = {}) {
        this.props = props
        this.modules = []
    }

    static create(props) {
        app = new this(props)
        return app
    }

    static get() {
        return app
    }

    addModule(moduleType, container = null, props = {}) {
        const module = new moduleType(this, container, props)
        this.modules.push(module)
        return module
    }

}