import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './bootstrap-override.scss';
import UserLoginPage from './pages/UserLoginPage';
import UserSignupPage from './pages/UserSignupPage';
import reportWebVitals from './reportWebVitals';
import './18n';
import LanguageSelector from './components/LanguageSelector';

ReactDOM.render(
  <div>
    <UserLoginPage />
    <LanguageSelector />
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
