import React from 'react'

class Navbar extends React.Component {
    render() {
        return (
            <>
            <div className="navbar">{this.props.children}</div>
            </>
        )
    }
}

class Navbutton extends React.Component {
    render() {
        return <span className="navbutton">{this.props.children}</span>
    }
}

export {Navbutton}
export default Navbar;