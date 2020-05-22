import React, { Component} from 'react'
import './input.css';

class Input extends React.Component {
    constructor(props) {
    super(props);
        console.log('CONSTRUCTOR');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() { 
        console.log('componentDidUpdate');
    }

    render() {
        const {
        type,
        className,
        placeholder,
    } = this.props

        return (
            <input 
                type={type}
                className={className}
                placeholder={placeholder}
            />
        );
    }
}

export default Input;