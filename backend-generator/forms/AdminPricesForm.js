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

const AdminPricesForm = () => {
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
      <Form.Item
        name="price"
        label="Price"
        rules={[
          {
            required: True,
          },
        ]}
      >
        <InputNumber />
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

export default AdminPricesForm;
