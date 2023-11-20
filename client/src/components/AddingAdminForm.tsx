import React from 'react'
import { Form, Input, Button } from 'antd';

const AddingAdminForm = ({onFinish, name} : any) => {
  return (
    <Form
        name={name}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item name="Name" label="Название" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Form>
  )
}

export default AddingAdminForm