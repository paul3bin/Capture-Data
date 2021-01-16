import React, {useEffect} from 'react';
import { useCookies } from 'react-cookie';

function AdminLanding() {

    const [token, setToken, deleteToken] = useCookies(['token']);

    const logoutUser = () => {
        deleteToken(['token']);
    }

    useEffect(() => {
        if(!token['token']) window.location.href = '/'
      }, [token])

    const downloadClicked = () =>{
        alert('Download button is clicked!')
    }

    return (
        <div className="App">
        <header className="App-header">
            <button className="btn btn-warning Download" onClick={downloadClicked}>Download Data</button><br/>
            <button className="btn btn-danger Admin-Login" onClick={logoutUser}>Logout</button><br/>
        </header>
        </div>
    );
}

export {AdminLanding};
