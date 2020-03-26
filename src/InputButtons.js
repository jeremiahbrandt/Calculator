import React from 'react'

import Button from './Button'

class InputButtons extends React.Component {
    render() {
        return(
            <div className='inputButtons'>
                <Button value={7} handleClick={this.props.handleClick} />
                <Button value={8} handleClick={this.props.handleClick} />
                <Button value={9} handleClick={this.props.handleClick} />
                <Button value={'/'} handleClick={this.props.handleClick} />

                <Button value={4} handleClick={this.props.handleClick} />
                <Button value={5} handleClick={this.props.handleClick} />
                <Button value={6} handleClick={this.props.handleClick} />
                <Button value={'*'} handleClick={this.props.handleClick} />

                <Button value={1} handleClick={this.props.handleClick} />
                <Button value={2} handleClick={this.props.handleClick} />
                <Button value={3} handleClick={this.props.handleClick} />
                <Button value={'-'} handleClick={this.props.handleClick} />

                <Button value={'C'} handleClick={this.props.reset} />
                <Button value={0} handleClick={this.props.handleClick} />
                <Button value={'='} handleClick={this.props.handleClick} />
                <Button value={'+'} handleClick={this.props.handleClick} />
            </div>
        )
    }
}

export default InputButtons