import React from 'react'
import Input from '../input/Input'

class Model extends React.Component {
    render() {
        return (
        <div id='contacts'>
        <h5>Contact Info</h5>
        <form id='form_input'> 
        <label>Name <br />
        <Input 
            type={'text'}
            className={'input_name'}
            placeholder={'Input your name...'}
            /> 
        </label> <br />
        <label>Age <br />
        <Input 
            type={'number'}
            className={'input_age'}
            placeholder={'Input your age...'}
        />
        </label> <br />

        <label>Email <br />
        <Input 
            type={'email'}
            className={'input_email'}
            placeholder={'Input your email...'}
        />
        </label> <br />
        
        <label>Tel <br />
        <Input 
            type={'text'}
            className={'input_tel'}
            placeholder={'Input tel number...'}
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