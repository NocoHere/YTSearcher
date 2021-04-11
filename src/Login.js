import React from 'react';
import fire from './firebase';
import { Form, Input, Button, Typography } from 'antd';
import 'antd/dist/antd.css';
import formLogo from './img/sibdev-logo.svg'

const { Title } = Typography;

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasAccount: true,
    };
  }

  setHasAccount = () => {
    let status = !this.state.hasAccount;
    this.setState({ hasAccount: status });
  }

  signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch(err.code) {
          case "auth/email-already-in-use":
            err.code = "Этот email уже зарегистрирован";
            break; 
          case "auth/invalid-email":
            err.code = "Некорректный email";
            break;
          default:
            err.code = "Ошибка регистрации";
            break;
        }
        document.getElementById('error').textContent = err.code;
      })
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch(err.code) {
          case "auth/user-not-found":
            err.code = "Неверный email";
            break;
          case "auth/wrong-password":
            err.code = "Неверный пароль";
            break;  
          default :
        }
        document.getElementById('error').textContent = err.code;
      })
  }

  render() {
    return (
      <Form
        name="basic"
        className={'auth-form'}
        layout="vertical"
      >
        <img src={ formLogo } className={'auth-form__logo'} alt={'Sibdev логотип'}/>
        <Title id="form-title" className={'auth-form__title'}>{this.state.hasAccount ? "Вход" : "Регистрация"}</Title>
        <Form.Item
          label="Логин"
          name="login"
          rules={[
            {
              required: true,
              message: 'Введите логин',
            }
          ]}
        >
          <Input id="email"/>
        </Form.Item>
  
        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: 'Введите пароль',
            }
          ]}
        >
          <Input.Password id="password"/>
        </Form.Item>
        
        <Form.Item>
          <Button className={ 'auth-form__btn' } type="primary" htmlType="submit" onClick={this.state.hasAccount ? this.login : this.signUp}> 
            {this.state.hasAccount ? "Войти" : "Зарегистрироваться"}
          </Button>
          {this.state.hasAccount ? <p>Нет аккаунта? <span className={ 'auth-form__link' } onClick={this.setHasAccount}>Зарегистроваться</span></p> : <p>Есть аккаунт? <span className={ 'auth-form__link' } onClick={this.setHasAccount}>Войти</span></p>}
          <p id="error" style={{padding: '0px', color: 'red'}}></p>
        </Form.Item>
      </Form>
    );
  }
}

export default Login;
