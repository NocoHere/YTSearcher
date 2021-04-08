import { Form, Input, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import formLogo from '../img/sibdev-logo.svg'

const { Title } = Typography;



const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
console.log('Failed:', errorInfo);
};

function Login() {
  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className={'auth-form'}
      layout="vertical"
    >
      <img src={ formLogo } className={'auth-form__logo'} alt={'Sibdev логотип'}/>
      <Title className={'auth-form__title'}>Вход</Title>
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
        <Input />
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
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button className={ 'auth-form__btn' } type="primary" htmlType="submit">
          Войти
        </Button>

        <Link className={ 'auth-form__link' } to={'/registration'}>Зарегестрироваться</Link>
      </Form.Item>
    </Form>
  );
};

export default Login;