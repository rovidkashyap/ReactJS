import React, { Component } from 'react'

class Welcome extends Component {
    render(){
        const {name, heroName} = this.props
        return (
            <div>
                <h1>Hello {name} a.k.a {heroName} from Class Component</h1>
                {/*{children}*/}
            </div>
        )
    }
}

export default Welcome
