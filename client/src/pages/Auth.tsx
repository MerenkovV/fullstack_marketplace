import React from 'react'
import { Content } from 'antd/es/layout/layout'
import { Button, Checkbox, Form, Input } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const Auth = () => {
  const {pathname} = useLocation()
  const isLogin = pathname === '/login'
  
  return (
    <Content>
      <div style={{paddingTop: '25px'}}>
        {isLogin ? 
        <h3 style={{padding: '0 0 0 115px'}}>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}> Зарегистрируйтесь!</NavLink></h3> :
        <h3 style={{padding: '0 0 0 115px'}}>Есть аккаунт? <NavLink to={LOGIN_ROUTE}> Авторизируйтесь!</NavLink></h3>
        }
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Content>
  )
}

export default Auth