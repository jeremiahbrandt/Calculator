import React from 'react'

import './css/style.css'

import Output from './Output'
import InputButtons from './InputButtons'

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleNumberInput = this.handleNumberInput.bind(this)
        this.handleOperatorInput = this.handleOperatorInput.bind(this)
        this.getOutput = this.getOutput.bind(this)
        this.reset = this.reset.bind(this)
        this.state = {
            values: [],
            showResult: false
        }
    }

    handleClick(value) {
        //Determines if value is '='
        (typeof value === 'number' ? this.handleNumberInput(value) : this.handleOperatorInput(value)) 
        ?   this.setState({showResult: true})
        :   this.setState({showResult: false})
    }
    
    handleNumberInput(value) {
        //Checks if last input was number and combines if necessary
        if(typeof this.state.values[this.state.values.length-1] === 'number') {
            const newState = {
                values: [],
                showResult: this.state.showResult
            }

            for(let i=0; i<this.state.values.length-1; i++) {
                console.log(i);
                newState.values.push(this.state.values[i])
            }

            //Sets string values of last index and new value
            const lastNumberString = this.state.values[this.state.values.length-1].toString()
            const valueString = value.toString()
            //Pushes new number to newState
            newState.values.push(Number(lastNumberString + valueString))

            this.setState(newState)
        } else {
            this.state.values.length === 0 
                ?   this.setState({values: [value]}) 
                :   this.setState(prevState => ({values: [...prevState.values, value]}))
        }
    }

    handleOperatorInput(value) {
        //TODO: Negative numbers
        if(typeof this.state.values[this.state.values.length-1] != 'string'){
            return value === '=' 
                ?   true 
                :   this.state.values.length === 0 ? 
                    this.setState({values: []}) :
                    this.setState(prevState => ({values: [...prevState.values, value]}))
        } else {
            //Iterates over copy of previous state and replaces last index with new operator
            const newState = {
                values: [],
                showResult: this.state.showResult
            }
            //Copys old state except for last index
            for(let i=0; i<this.state.values.length-1; i++) {
                newState.values.push([this.state.values[i]])
            }
            //Pushes new value
            newState.values.push(value)

            this.setState(newState)
        }
    }

    getOutput() {
        const values = this.state.values

        const outputString = values.toString().replace(/,/g, " ")
        let calculatedAnswer = values[0]
        //TODO: Order of Operations
        for(let i=2; i<values.length; i+=2) {
            switch(values[i-1]) {
                case '+': 
                    calculatedAnswer += values[i]
                    break
                case '-': 
                    calculatedAnswer -= values[i]
                    break
                case '*': 
                    calculatedAnswer *= values[i]
                    break
                case '/': 
                    calculatedAnswer /= values[i]
                    break
            }
        }

        return !this.state.showResult ? outputString : calculatedAnswer
    }

    reset() {
        this.setState({values:[]})
    }

    render() {
        return(
            <div className='calculator'>
                <Output value={this.getOutput()} />
                <InputButtons handleClick={this.handleClick} reset={this.reset} />
            </div>
        )
    }
}

export default Calculator