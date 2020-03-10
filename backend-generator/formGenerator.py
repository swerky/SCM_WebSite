#!/usr/bin/python

def formGenerator(object, objects, enums):
  NAME = formatName(object)
  FILE_NAME = "Admin" + NAME.capitalize() + "Form"
  path = "./forms/" + FILE_NAME + ".js"
  form = open(path, "w")

  wl(form, 0, "import React, {useRef} from 'react';")
  wl(form, 0, "import {Form, Input, DatePicker, Select, Button, AutoComplete, Radio, InputNumber, Checkbox, Row, Col} from 'antd';")
  wl(form, 0, '')
  wl(form, 0, "const { Option } = Select;")
  wl(form, 0, '')
  wl(form, 0, "const layout = {")
  wl(form, 1, "labelCol: { span: 8 },")
  wl(form, 1, "wrapperCol: { span: 16 },")
  wl(form, 0, "};")
  wl(form, 0, "const tailLayout = {")
  wl(form, 1, "wrapperCol: { offset: 8, span: 16 },")
  wl(form, 0, "};")
  wl(form, 0, '')
  wl(form, 0, "const " + FILE_NAME + " = () => {")
  wl(form, 1, "const formRef = useRef(null);")
  wl(form, 0, '')
  wl(form, 1, "const onFinish = () => {")
  wl(form, 2, "console.log(\"finish\"); // TO CHANGE")
  wl(form, 1, "}")
  wl(form, 0, '')
  wl(form, 1, "const onReset = () => {")
  wl(form, 2, "formRef.current.resetFields()")
  wl(form, 1, "}")
  wl(form, 0, '')
  wl(form, 1, "return (")
  wl(form, 2, "<Form {...layout} ref={formRef} name=\"control-ref\" onFinish={onFinish()}>")
  for var in object.memberVariables:
    printInput(form, var, objects, enums)

  wl(form, 3, "<Form.Item {...tailLayout}>")
  wl(form, 4, "<Button type=\"primary\" htmlType=\"submit\">")
  wl(form, 5, "Ajouté")
  wl(form, 4, "</Button>")
  wl(form, 4, "<Button htmlType=\"button\" onClick={onReset}>")
  wl(form, 5, "Reset")
  wl(form, 4, "</Button>")
  wl(form, 3, "</Form.Item>")
  wl(form, 2, "</Form>")
  wl(form, 1, ");")
  wl(form, 0, "}")
  wl(form, 0, '')
  wl(form, 0, "export default " + FILE_NAME + ";")

def printInput(form, var, objects, enums):
  enums_names = list(map(lambda e: e.name, enums))
  if var.typeVariable != "ID":
    printFormItemOpen(form, var)
    if var.isList:
      if var.typeVariable in enums_names:
        enumSelect = next((enum for enum in enums if enum.name == var.typeVariable), None)
        wl(form, 4, "<Select")
        wl(form, 5, "placeholder=\"Selectionnez une des réponses proposées \"")
        wl(form, 4, ">")
        for value in enumSelect.values:
          wl(form, 5, "<Option value=\"" + value + "\">" + value + "</Option>")
        wl(form, 4, "</Select>")
    elif var.typeVariable == "String":
      wl(form, 4, "<Input />")
    elif var.typeVariable == "Int" or var.typeVariable == "Float": # can be improoved
      wl(form, 4, "<InputNumber />")
    elif var.typeVariable == "DateTime":
      wl(form, 4, "<DatePicker />")
    elif var.typeVariable == "Boolean":
      wl(form, 4, "<Switch />")
    else:
      if var.typeVariable in enums_names:
        enumSelect = next((enum for enum in enums if enum.name == var.typeVariable), None)
        wl(form, 4, "<Radio.Group>")
        for value in enumSelect.values:
          wl(form, 5, "<Radio.Button value=\"" + value + "\">" + value + "</Radio.Button>")
        wl(form, 4, "</Radio.Group>")
      else: 
        print("should be link to another object")
        wl(form, 4, "// NEED TO BE CONNECTED TO AN OTHER OBJECT")

    wl(form, 3, "</Form.Item>")
  

def printFormItemOpen(form, var):
  wl(form, 3, "<Form.Item")
  wl(form, 4, "name=\"" + var.name + "\"")
  wl(form, 4, "label=\"" + var.name.capitalize() + "\"")
  wl(form, 4, "rules={[")
  wl(form, 5, "{")
  wl(form, 6, "required: " + var.obligatory.__str__() + ",")
  wl(form, 5, "},")
  wl(form, 4, "]}")
  wl(form, 3, ">")



def formatName(object):
  return object.name.lower() if object.name[-1:] == 's' else object.name.lower() + "s"

def wl(view, indent, line):
  '''WRITE LINE'''
  view.write(" " * indent * 2 + line + "\n")