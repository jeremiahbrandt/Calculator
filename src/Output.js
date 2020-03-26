import React from 'react'

class Output extends React.Component {
    render() {
        return(
            <div className='output'>
                {this.props.value}
            </div>
        )
    }
}

export default Output