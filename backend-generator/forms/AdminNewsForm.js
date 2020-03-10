import React, {useRef} from 'react';
import {Form, Input, DatePicker, Select, Button, AutoComplete, Radio, InputNumber, Checkbox, Row, Col} from 'antd';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AdminNewsForm = () => {
  const formRef = useRef(null);

  const onFinish = () => {
    console.log("finish"); // TO CHANGE
  }

  const onReset = () => {
    formRef.current.resetFields()
  }

  return (
    <Form {...layout} ref={formRef} name="control-ref" onFinish={onFinish()}>
      <Form.Item
        name="title"
        label="Title"
        rules={[
          {
            required: True,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="date"
        label="Date"
        rules={[
          {
            required: True,
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="content"
        label="Content"
        rules={[
          {
            required: True,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="event"
        label="Event"
        rules={[
          {
            required: True,
          },
        ]}
      >
        // NEED TO BE CONNECTED TO AN OTHER OBJECT
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Ajouté
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AdminNewsForm;
