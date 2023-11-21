import React from 'react'
import { Form, Input, Button } from 'antd';

const AddingAdminForm = ({onFinish, name} : any) => {
  const [form] = Form.useForm()

  return (
    <Form
        form={form}
        name={name}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item name="name" label="Название" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
          <Button style={{marginLeft: '20px'}} type="dashed" htmlType="reset">
            Очистить
          </Button>
        </Form.Item>
      </Form>
  )
}

export default AddingAdminForm