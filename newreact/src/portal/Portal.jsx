import React, { Component} from 'react';
import ReactDOM from 'react-dom';

class Portal extends React.Component {

    componentDidMount() {
        this.root = document.createElement('div')
        document.body.appendChild(this.root);
    }

    componentDidUpdate() { 
        this.root = document.body.removeChild(this.root)
    }

    render() {
        return ReactDOM.createPortal(
            <div className='portal'>
                <button className='model_close' onClick={this.props.onClick}>Close</button>
                {this.props.children}
            </div>,
            this.root
        )
    }
}

export default Portal;