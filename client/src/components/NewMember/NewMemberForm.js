import React, {useState} from 'react';
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

import './NewMemberForm.less';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const dateFormat = 'DD.MM.YYYY';

const NewMemberForm = (props) => {
  const { getFieldDecorator } = props.form;
  const [confirmDirty, setConfirmeDirty] = useState(false);

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const compareToFirstPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && value !== form.getFieldValue('email')) {
      callback('Les deux email entrée ne sont pas les mêmes!');
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  const handleConfirmBlur = (e) => {
    const { value } = e.target;
    setConfirmeDirty(confirmDirty || !!value);
  }

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>
        <Form.Item label="Nom">
          {getFieldDecorator('lastName', {
            rules: [
              {
                required: true,
                message: 'Veuillez entrer votre nom!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Prénom">
          {getFieldDecorator('firstName', {
            rules: [
              {
                required: true,
                message: 'Veuillez entrer votre prénom!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Date de naissance">
          {getFieldDecorator('birthday', {
            rules: [
              {
                required: true,
                message: 'Veuillez entrer votre date de naissance!',
              },
            ],
          })(<DatePicker format={dateFormat}/>)}
        </Form.Item>
        <Form.Item label="Genre">
          {getFieldDecorator('sex', {
            rules: [
              {
                required: true,
                message: 'Veuillez choisir votre genre!',
              },
            ],
          })(
            <Radio.Group>
              <Radio value={"MALE"}>Homme</Radio>
              <Radio value={"FEMALE"}>Femme</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="Addresse">
          {getFieldDecorator('street', {
            rules: [
              {
                required: true,
                message: 'Veuillez entrer votre rue et numéro de rue!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Localité">
          {getFieldDecorator('city', {
            rules: [
              {
                required: true,
                message: 'Veuillez entrer votre localité!',
              },
            ],
          })(<Input />)}
          </Form.Item>
          <Form.Item label="NPA">
          {getFieldDecorator('NPA', {
            rules: [
              {
                required: true,
                message: 'Veuillez entrer votre NPA!',
              },
            ],
          })(<InputNumber min={1000} max={9999}/>)}
        </Form.Item>
        <Form.Item label="E-mail" hasFeedback>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'Ce n\'est pas un email valide!',
              },
              {
                required: true,
                message: 'Veuillez entrer votre email!',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Confirmation E-mail" hasFeedback>
          {getFieldDecorator('emailConfirmation', {
            rules: [
              {
                type: 'email',
                message: 'Ce n\'est pas un email valide!',
              },
              {
                required: true,
                message: 'Veuillez entrer votre email!',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          })(<Input onBlur={handleConfirmBlur}/>)}
        </Form.Item>
        <Form.Item label="Nom personne de contact">
          {getFieldDecorator('lastNameContact', {
            rules: [{ required: true, message: 'Veuillez entrer votre nom de la personne de contact!' }],
          })(<Input/>)}
        </Form.Item>
        <Form.Item label="Prénom personne de contact">
          {getFieldDecorator('firstNameContact', {
            rules: [{ required: true, message: 'Veuillez entrer votre nom de la personne de contact!' }],
          })(<Input/>)}
        </Form.Item>
        <Form.Item label="Téléphone personne de contact">
          {getFieldDecorator('phoneContact', {
            rules: [{ required: true, message: 'Veuillez entrer votre nom de la personne de contact!' }],
          })(<Input/>)}
        </Form.Item>
        <Form.Item label="Status">
          {getFieldDecorator('status', {
            rules: [{ required: true, message: 'Veuillez séléctionner le status de la personne inscrite!' }],
          })(
            <Radio.Group style={{width: '100%'}}>
              <Row>
                <Col span={6}>
                  <Radio value={"OJ"}>OJ</Radio>
                </Col>
                <Col span={6}>
                  <Radio value={"JUNIOR"}>Junior</Radio>
                </Col>
                <Col span={6}>
                  <Radio value={"ACTIF"}>Actif</Radio>
                </Col>
                <Col span={6}>
                  <Radio value={"PASSIF"}>Passif</Radio>
                </Col>
              </Row>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="Pratique le">
          {getFieldDecorator('sport', {
            rules: [{ required: true, message: 'Veuillez séléctionner si vous faites du ski ou du snowboard ou les deux!' }],
          })(
            <Checkbox.Group style={{ width: '100%' }}>
              <Row>
                <Col span={12}>
                  <Checkbox value="SKI">Ski</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="SNOWBOARD">Snowboard</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          )}
        </Form.Item>
        <Form.Item label="Remarques">
          {getFieldDecorator('remarque', {
            rules: [],
          })(<Input.TextArea/>)}
        </Form.Item>
        <Form.Item label="Options">
          {getFieldDecorator('options', {
            rules: [],
          })(
            <Checkbox.Group style={{ width: '100%' }}>
              <Row>
                <Col span={24}>
                  <Checkbox value="NEWSLETTER">Je désire reçevoir la Newsletter du Ski-Club de Morges.</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="EMAIL_COTISATION">Je désire recevoir la cotisation par email.</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="EMAIL_COTISATION">Je désire recevoir la cotisation par la poste.</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Devenir membre
          </Button>
        </Form.Item>
      </Form>
  );
}

export default Form.create({ name: 'new member' })(NewMemberForm);