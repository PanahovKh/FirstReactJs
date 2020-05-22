import React from 'react';
import './closeButton.css';

class Portal extends React.Component {
    render() {
        return (
            <div className='portal'>
                <button class='portal_close' onClick={this.props.onClose}>Close</button>
                {this.props.children}
            </div>
        );
    }
}

export default Portal