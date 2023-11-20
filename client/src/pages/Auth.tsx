import React from 'react'
import { Content } from 'antd/es/layout/layout'
import { Button, Checkbox, Form, Input, Collapse } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { useStore } from '../store/RootStore';
import type { CollapseProps } from 'antd';
import AddingAdminForm from '../components/AddingAdminForm';
import AddingDeviceAdminForm from '../components/AddingDeviceAdminForm';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinishReg = (values: any) => {
  console.log('Success:', values);
};

const onFinishAddType = (values: any) => {
  console.log('Type:', values);
};

const onFinishAddBrand = (values: any) => {
  console.log('Brand:', values);
};

const onFinishAddDevice = (values: any) => {
  console.log('Device:', values);
};

const Auth = () => {
  const {pathname} = useLocation()
  const {user, device} = useStore()
  const isLogin = pathname === '/login'
  
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Создать тип продукта',
      children: <AddingAdminForm onFinish={onFinishAddType} name="Type"/>,
    },
    {
      key: '2',
      label: 'Создать бренд',
      children: <AddingAdminForm onFinish={onFinishAddBrand} name="Brand"/>,
    },
    {
      key: '3',
      label: 'Создать девайс',
      children: <AddingDeviceAdminForm onFinish={onFinishAddDevice} device={device}/>,
    },
  ];

  return (
    <Content style={{ minHeight: '100vh'}}>
      {user.isAuth ? 
      <div style={{padding: '25px 0 0 55px'}}>
        <h2>Здравствуйте, {user.user.email}</h2>
        {
          user.user.role === 'ADMIN' && 
          <Collapse style={{maxWidth: '80vw'}} accordion items={items}/>
        }
      </div> 
      :
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
          onFinish={onFinishReg}
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
      }
    </Content>
  )
}

export default Auth