import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.props.handleClick(this.props.value)
    }

    render() {
        return(
            <div className='button' onClick={this.handleClick}>
                {this.props.value!=null ? this.props.value : '?'}
            </div>
        )
    }
}

export default Button