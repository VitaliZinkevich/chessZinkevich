/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */

export class AppModule {

    constructor(app, container = null, props = {}) {
        this.app = app
        this.container = container
        this.props = props
        this.state = {}
        this.components = []
    }

    addComponent(componentType, props = {}) {
        const component = new componentType(this, props)
        this.components.push(component)
        return component
    }

}