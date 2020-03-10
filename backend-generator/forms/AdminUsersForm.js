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

const AdminUsersForm = () => {
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
        name="lastName"
        label="Lastname"
        rules={[
          {
            required: True,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="firstName"
        label="Firstname"
        rules={[
          {
            required: True,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: True,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="street"
        label="Street"
        rules={[
          {
            required: True,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="city"
        label="City"
        rules={[
          {
            required: True,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="NPA"
        label="Npa"
        rules={[
          {
            required: True,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name="birthday"
        label="Birthday"
        rules={[
          {
            required: True,
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="sexe"
        label="Sexe"
        rules={[
          {
            required: True,
          },
        ]}
      >
        <Radio.Group>
          <Radio.Button value="MALE">MALE</Radio.Button>
          <Radio.Button value="FEMALE">FEMALE</Radio.Button>
          <Radio.Button value="OTHER">OTHER</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="status"
        label="Status"
        rules={[
          {
            required: True,
          },
        ]}
      >
        <Select
          placeholder="Selectionnez une des réponses proposées "
        >
          <Option value="OJ">OJ</Option>
          <Option value="Actif">Actif</Option>
          <Option value="Moniteur">Moniteur</Option>
          <Option value="Comite">Comite</Option>
          <Option value="Participant">Participant</Option>
        </Select>
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

export default AdminUsersForm;
