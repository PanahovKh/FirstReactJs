import React from 'react'
import Input from '../input/Input'
//import {sendPutRequest} from '../../REST'

class Model extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            inputValues: {}
        }
    }  

    inputChangeHandler = (e) => {
        const {name, value} = e.target;

        this.setState(prevState => ({
            inputValues : {
            ...prevState.inputValues,
            [name] : value
            }
        }));
    }
    checkFormHandler = (e) => {
        e.preventDefault();
        console.log( this.state.inputValues );  
        const person = this.state;
        let object = {person}
        let formData = new FormData(document.forms.person);
    
        formData.forEach(function(value, key){
            object[key] = value;
        });
        console.log(object);
        //sendPutRequest(object);
        return false;
    }

    render() {
        return (
        <div id='contacts'>
        <h5>Contact Info</h5>
        <form id='form_input' onClick = {this.handleSubmit} onSubmit={this.checkFormHandler}> 
        <label>Name <br />
        <Input 
            type={'text'}
            name='login'
            className={'input_name'}
            placeholder={'Input your name...'}
            onChange={this.inputChangeHandler}
            /> 
        </label> <br />
        <label>Age <br />
        <Input 
            type={'number'}
            name={'age'}
            className={'input_age'}
            placeholder={'Input your age...'}
            onChange={this.inputChangeHandler}
        />
        </label> <br />

        <label>Email <br />
        <Input 
            type={'email'}
            name={'email'}
            className={'input_email'}
            placeholder={'Input your email...'}
            onChange={this.inputChangeHandler}
        />
        </label> <br />
        
        <label>Tel <br />
        <Input 
            type={'text'}
            name={'number'}
            className={'input_tel'}
            placeholder={'Input tel number...'}
            onChange={this.inputChangeHandler}
        />
        </label>

        <Input 
            type={'submit'}
            className={'input_submit'}
        />

<Input 
            type={'reset'}
            className={'input_submit reset'}
        />
    
        </form>
        </div>
        )
    }


}

export default Model