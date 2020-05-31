import React from 'react'
import Model from '../Model/Model'
import './welcomePage.css'



class WelcomePage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isShowModal: false,
        }
    }

    changeModal = isShow => {
        this.setState ({isShowModal: isShow}) 
    }

    render() {
        const { changeModal } = this;
        const { isShowModal } = this.state;
    
        return (
            <>
                {isShowModal ? (<Model/>) : 
                <div className = 'modal-page'>
                    <h1 className = 'modal-page__title'>Welcome to Game</h1>
                    <button className = 'modal-page__btn' onClick = {changeModal}>Click for Registration</button>
                </div>
                } 
            </>
        )
    }
}

export default WelcomePage