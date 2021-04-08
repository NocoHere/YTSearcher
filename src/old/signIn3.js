import { Form, Input, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Component } from 'react';
import formLogo from '../img/sibdev-logo.svg'

const { Title } = Typography;



const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};



export default class Registration extends Component {
    render() {
        return (
            <Form
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            className={'auth-form'}
            >
                <img src={ formLogo } className={'auth-form__logo'} alt={'Sibdev логотип'} />
                <Title className={'auth-form__title'}>Регистрация</Title>
                <Form.Item
                    label="Имя"
                    name="name"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Логин"
                    name="login"
                    rules={[
                    {
                        required: true,
                        message: 'Поле не заполнено',
                    },
                    ]}
                    className={'registration-form'}
                >
                    <Input />
                </Form.Item>
    
                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Поле не заполнено',
                    },
                    ]}
                    className={'registration-form'}
                >
                    <Input.Password />
                </Form.Item>
    
                <Form.Item>
                    <Button className={ 'auth-form__btn registration-form' } type="primary" htmlType="submit">
                        Зарегестрироваться
                    </Button>
    
                    <Link className={ 'auth-form__link' } to={'/'}>Уже есть аккаунт</Link>
                </Form.Item>
            </Form>
        );
    }
};

