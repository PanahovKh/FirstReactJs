
import React from 'react';
import Input from './components/input/Input';
import ReactDOM from 'react-dom';
//import Label from './components/label/Label';

function App() {
  return (
    <div id='contacts'>
      <h5>Contact Info</h5>
      <form id='form_input'> 

      <label>Name, Surname  <br />
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
      
    <label >Email <br />
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
    
      </form>
    </div>
  );
}

export default App;