import React, {useState} from 'react';
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import firebaseApp from './../firebase/firebaseConfig'

import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'
import AppBar from "../components/appbar/AppBar";


const LoginPageStyles = styled.aside`

  max-width: 380px;
  margin: 6rem auto 0;

  h1 {
    font-size: 2.25rem;
  }

`

const LoginPage = (props) => {
    let history = useHistory();

    const [email, setEmail] = useState('james@home.com')
    const [isValidEmail, setValidEmail] =useState(true)
    const [isValidEmailPass, setValidEmailPass] = useState(true)
    const [password, setPassword] = useState('123456')

    const handleClick = (e) => {
        const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email.match(mailFormat))
        {
            setValidEmail(false)
            return;
        }
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                // email and password input
                if (userCredential.user && userCredential.user.refreshToken) {
                    localStorage.setItem('AuthToken', userCredential.user.refreshToken);
                    history.push('/dashboard')
                }
            })
            .catch(error => {
                setValidEmailPass(false)
                console.log(error.code)
                console.log(error.message)
            })
    }

    const onHandleEmail = (value) => {
        setValidEmail(true)
        if(!isValidEmailPass) setValidEmailPass(true)
        setEmail(value)
    }

    const onHandlePassword = (value) => {
        if(!isValidEmailPass) setValidEmailPass(true)
        setPassword(value)
    }
    return (
        <div>
            <AppBar/>
            <LoginPageStyles>
                <header><h1>Login Page</h1></header>
                {!isValidEmailPass && <div style={{ margin: '10px 0', color: 'red'}}><label>Please Enter Valid Email and Password</label></div>}
                <FormInput type="text" label="email" value={email} onChange={(val) => onHandleEmail(val)}/>
                {!isValidEmail && <div style={{ color: 'red', margin: '-12px 0 5px'}}><label>Enter Valid Email Address</label></div>}
                <FormInput type="password" label="password" value={password} onChange={(val) => onHandlePassword(val)}/>
                <Button label="login" uiStyle="login" onClick={handleClick}/>
            </LoginPageStyles>
        </div>
    );
}

export default LoginPage;



 



 



 