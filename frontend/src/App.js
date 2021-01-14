import './App.css';
import React, {useState} from 'react';

import {API} from './api_service'

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');


  const saveClicked = () =>{
    if (firstName.length === 0 || lastName.length === 0 || email.length === 0){
      alert('Fill all the fields!')
    }
    else{
    API.saveData({first_name: firstName, last_name: lastName, email: email}).catch(error => console.log(error))
    setFirstName('')
    setLastName('')
    setEmail('')
  }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button className="btn btn-secondary">Download Data</button><br/>
        <div class="mb-3">
          <input id='firstName' type='text' className="form-control" placeholder='First Name' value={firstName} 
            onChange={evnt => setFirstName(evnt.target.value)}/>
        </div>
        <div class="mb-3">
          <input id='lastName' type='text' className="form-control" placeholder='Last Name' value={lastName} 
            onChange={evnt => setLastName(evnt.target.value)}/>
        </div>
        <div class="mb-3">
          <input type="email" className="form-control" placeholder="Email" value={email}
            onChange={evnt => setEmail(evnt.target.value)}/>
        </div>
        <button className="btn btn-primary" onClick={saveClicked}>Submit</button>
      </header>
    </div>
  );
}

export default App;
