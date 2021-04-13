import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import firebaseApp from './../firebase/firebaseConfig'

import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'
import AppBar from "../components/appbar/AppBar";
const RegisterPageStyles = styled.aside` 
    width: 480px;
    margin: 6rem auto 0;
    header{
        text-align:center;
        margin-bottom: 3rem;
    }
    h2{
        font-size: 2rem;
        font-weight: 700;
    }
    .create-account{
        margin-top: 2rem;
    }
`

const RegisterPage = (props) => {
    let history = useHistory();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onHandleSubmit = () => {
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                if(userCredential.additionalUserInfo.isNewUser && userCredential.user) {
                    history.push('/login')
                }
            })
            .catch((error) => {
                console.log(error.code)
                console.log(error.message)
            });
    }
    return (
        <div>
            <AppBar/>
            <RegisterPageStyles>
                <header>
                    <h2>Unlimited Free Trial Sign Up</h2>
                    <p>no credit card required</p>
                </header>
                <FormInput label="name on the account" type="text" value={name} onChange={(val) => setName(val)}/>
                <FormInput label="valid email address" type="email" value={email} onChange={(val) => setEmail(val)}/>
                <FormInput label="password (min 6 charachters)" type="password" value={password} onChange={(val) => setPassword(val)}/>
                <Button className="create-account" uiStyle="login" label="create a free account" onClick={() => onHandleSubmit()}/>
            </RegisterPageStyles>
        </div>
);
}
 
export default RegisterPage;