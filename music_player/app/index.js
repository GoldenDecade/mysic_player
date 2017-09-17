import 'app/css/index.styl'

import React from 'react'
import {render} from 'react-dom'

var logoURL = require('app/images/logo.png')

let Header = React.createClass({
    render() {
        return (
            <div className="header">
                <img src={logoURL} alt=""/>
                <span>music player by react</span>
            </div>
        )
    }
})
render(<Header />, document.getElementById('app'))

console.log(1235432);