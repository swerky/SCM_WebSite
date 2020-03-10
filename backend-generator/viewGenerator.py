#!/usr/bin/python

def viewGenerator(object, enums):
  path = "./views/" +  object.name + "View.js"
  form = open(path,"w")

  writeHeading(form, object.name)

  writeComponent(form, object, enums)


def writeHeading(form, name):
  QUERY = "GET_" + name.upper()
  QUERY_FILE = name + ".queries.queries"

  wl(form, 0, "import React from 'react';")
  wl(form, 0, "import { Table, Tag } from 'antd';")
  wl(form, 0, "import {useQuery} from '@apollo/react-hooks';")
  # A MODIFIER
  wl(form, 0, "import {" + QUERY +"} from '../../queries/" + QUERY_FILE + "';")
  wl(form, 0, "import { Spin, Alert } from 'antd';")
  wl(form, 0, "import {EditOutlined,DeleteOutlined} from '@ant-design/icons';")
  wl(form, 0, "import moment from 'moment';")
  wl(form, 0, '')
  wl(form, 0, "moment.locale('fr');")
  wl(form, 0, '')
  wl(form, 0, "const DATE_FORMAT = \"DD.MM.YYYY\";")
  wl(form, 0, "const COL_SIZE = 250;")
  wl(form, 0, '')

def writeComponent(form, object, enums):
  QUERY = "GET_" + object.name.upper()
  FUNCTION_NAME = "Admin" + object.name + "View"
  wl(form, 0, "const " + FUNCTION_NAME + " = () => {")
  wl(form, 1, "const { loading : queryLoading, error: queryError, data } = useQuery(GET_" + QUERY +");")
  wl(form, 0, "")
  wl(form, 1, "if(queryLoading) return <Spin size=\"large\"/>")
  wl(form, 0, "")
  wl(form, 1, "if(queryError) return (")
  wl(form, 2, "<Alert")
  wl(form, 3, "message=\"Une erreur est survenu lors du chargement du programme\"")
  wl(form, 3, "description=\"Veuillez recharger la page. Si le problème subsiste, veuillez contacter le webmaster\"")
  wl(form, 3, "type=\"error\"")
  wl(form, 3, "showIcon")
  wl(form, 2, "/>")
  wl(form, 1, ");")
  wl(form, 0, "")
  writeColumns(form, object, enums)
  wl(form, 0, '')
  wl(form, 1, "const x = columns.length * COL_SIZE;")
  wl(form, 0, '')
  wl(form, 1, "return (<Table className=\"tableData\" columns={columns} dataSource={data." + object.name +"s} scroll={{ x: x }}/>); // Check data name")
  wl(form, 0, "}")
  wl(form, 0, '')
  wl(form, 0, "export default " + FUNCTION_NAME + ";")


def writeColumns(form, object, enums):
  wl(form, 1, "const columns = [") # declaration

  for i, member in enumerate(object.memberVariables):
    if member.typeVariable != "ID":
      wl(form, 2, "{")
      wl(form, 3, "title: '" + member.name.capitalize() + "',")
      wl(form, 3, "dataIndex: '"+ member.name + "',")
      wl(form, 3, "key: '"+ member.name + "',")
      if i == 0: # first column
        wl(form, 3, "width: 150,")
        wl(form, 3, "fixed: 'left'")
      
      # DateTime
      if member.typeVariable == "DateTime":
        wl(form, 3, "render: " + member.name + " => (<span>{moment(" + member.name + ").format(DATE_FORMAT)}</span>)")

      if member.isList == True:
        wl(form, 3, "render: status => (")
        wl(form, 4, "<span>")
        wl(form, 5, "{status.map(statusUser => {")
        wl(form, 6, "let color = \"geekblue\";")
        wl(form, 6, "return (")
        wl(form, 7, "<Tag color={color} key={statusUser}>")
        wl(form, 8, "{statusUser.toUpperCase()}")
        wl(form, 7, "</Tag>")
        wl(form, 6, ");")
        wl(form, 5, "})}")
        wl(form, 4, "</span>")
        wl(form, 3, "),")
      wl(form, 2, "},")
  
  # Actions
  wl(form, 2, "{")
  wl(form, 3, "title: 'Actions',")
  wl(form, 3, "key: 'operation',")
  wl(form, 3, "fixed: 'right',")
  wl(form, 3, "render: () => <div><a className=\"iconAction\"><EditOutlined style={{color: 'rgba(0, 0, 0, 0.65)', marginRight: '10px'}}/></a><a className=\"iconAction\"><DeleteOutlined style={{color: 'rgba(0, 0, 0, 0.65)'}}/></a></div>,")
  wl(form, 2, "},")
  wl(form, 1, "];") # closing declaration

def wl(form, indent, line):
  '''WRITE LINE'''
  form.write(" " * indent * 2 + line + "\n")