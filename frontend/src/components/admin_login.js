import React, {useState, useEffect} from 'react';
import { useCookies } from 'react-cookie';

import { API } from '../api_service'

function AdminLogin() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useCookies(['token']);

  const loginClicked = () =>{
    if (username.length === 0 || password.length === 0){
      alert('Fill all the fields!')
    }
    else{
      API.adminLogin({username: username, password: password})
      .then(resp => setToken('token', resp.token))
      .catch(error => console.log(error))
    }
  }

  useEffect( () => {
      if(token['token']) window.location.href = '/admin-landing';
    }, [token])

  return (
    <div className="App">
      <header className="App-header">
        <div class="mb-3">
          <input id='UserName' type='text' className="form-control" placeholder='Username' value={username} 
            onChange={evnt => setUsername(evnt.target.value)}/>
        </div>
        <div class="mb-3">
          <input id='password' type='password' className="form-control" placeholder='Password' value={password} 
            onChange={evnt => setPassword(evnt.target.value)}/>
        </div>
        <button className="btn btn-primary" onClick={loginClicked}>Login</button>
      </header>
    </div>
  );
}

export {AdminLogin};
