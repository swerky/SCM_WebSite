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

const AdminEventsForm = () => {
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
        name="name"
        label="Name"
        rules={[
          {
            required: True,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="location"
        label="Location"
        rules={[
          {
            required: True,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="transport"
        label="Transport"
        rules={[
          {
            required: False,
          },
        ]}
      >
        <Radio.Group>
          <Radio.Button value="OWNCAR">OWNCAR</Radio.Button>
          <Radio.Button value="CAR">CAR</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="appointment"
        label="Appointment"
        rules={[
          {
            required: True,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="prices"
        label="Prices"
        rules={[
          {
            required: False,
          },
        ]}
      >
      </Form.Item>
      <Form.Item
        name="endInscription"
        label="Endinscription"
        rules={[
          {
            required: True,
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="startInscription"
        label="Startinscription"
        rules={[
          {
            required: True,
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="start"
        label="Start"
        rules={[
          {
            required: True,
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="end"
        label="End"
        rules={[
          {
            required: True,
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="offert"
        label="Offert"
        rules={[
          {
            required: False,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="informations"
        label="Informations"
        rules={[
          {
            required: False,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="organizers"
        label="Organizers"
        rules={[
          {
            required: False,
          },
        ]}
      >
      </Form.Item>
      <Form.Item
        name="picture"
        label="Picture"
        rules={[
          {
            required: False,
          },
        ]}
      >
        <Input />
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

export default AdminEventsForm;
