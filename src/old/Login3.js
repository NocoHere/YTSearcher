import React from 'react';

const Login = (props) => {
    const {email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError} = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <label>
                    Email
                </label>
                <input 
                    type="text" 
                    required 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}>  
                </input>
                <p className="errorMsg">
                    {emailError}
                </p>
                <label>
                    Password
                    </label>
                <input
                    type="password" 
                    required 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}>
                </input>
                <p className="errorMsg">
                    {passwordError}
                </p>
                <div className="btnContainer">
                    {hasAccount ? (
                    <> 
                        <button onClick={() => handleLogin}>Войти</button> 
                        <p>Нет аккаунта? 
                            <span onClick={() => setHasAccount(!hasAccount)}>Зарегестрироваться</span>
                        </p>
                    </>) 
                    : (
                    <> 
                        <button onClick={() => handleSignup}>Зарегестрироваться</button> 
                        <p>Есть аккаунт? 
                            <span onClick={() => setHasAccount(!hasAccount)}>Войти</span>
                        </p></>) }
                </div>
            </div>
        </section>
    )
}

export default Login;


