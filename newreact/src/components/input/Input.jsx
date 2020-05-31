import React from 'react'
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
        name,
        className,
        placeholder,
        onChange,
    } = this.props

        return (
            <input 
                type={type}
                name={name}
                className={className}
                placeholder={placeholder}
                onChange={onChange}
            />
        );
    }
}

export default Input;