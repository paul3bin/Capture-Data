import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter} from 'react-router-dom';
import {CookiesProvider} from 'react-cookie';
import { AdminLogin } from './components/admin_login'
import { AdminLanding } from './components/admin_landing'

function Router(){
  return(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path='/' component={App}/>
      <Route exact path='/admin-login' component={AdminLogin}/>
      <Route exact path='/admin-landing' component={AdminLanding}/>
    </BrowserRouter>
  </React.StrictMode>
  )
}

ReactDOM.render(<Router />,document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
