import React, {useRef} from 'react';
import {
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  AutoComplete,
  Radio,
  InputNumber,
  Checkbox,
  Row,
  Col
} from 'antd';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AdminUserAdd = () => {
  const formRef = useRef(null);

  const onFinish = () => {
    console.log("finish");
  }

  const onReset = () => {
    formRef.current.resetFields()
  }

  return (
    <Form {...layout} ref={formRef} name="control-ref" onFinish={onFinish()}>
      <Form.Item
        name="firstName"
        label="Prénom"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastName"
        label="Prénom"
        rules={[
          {
            required: true,
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
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="street"
        label="Rue"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="city"
        label="Ville"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="NPA"
        label="NPA"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="birthday"
        label="Date de naissance"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="sexe"
        label="Sexe"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Selectionnez une des réponses proposées "
        >
          <Option value="MALE">Homme</Option>
          <Option value="FEMALE">Femme</Option>
          <Option value="Other">Autre</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="status"
        label="Status"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Selectionnez une des réponses proposées"
          mode="tags"
        >
          <Option value="OJ">OJ</Option>
          <Option value="Actif">Actif</Option>
          <Option value="Moniteur">Moniteur</Option>
          <Option value="Comite">Comité</Option>
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

export default AdminUserAdd;