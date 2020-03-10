#!/usr/bin/python

def viewGenerator(object, enums):
  NAME = formatName(object)
  FILE_NAME = "Admin" + NAME.capitalize() + "View"
  path = "./views/" +  FILE_NAME + ".js"
  view = open(path,"w")

  writeHeading(view, NAME)

  writeComponent(view, object, enums)


def writeHeading(view, name):
  QUERY = "GET_" + name.upper()
  QUERY_FILE = name + ".queries"

  wl(view, 0, "import React from 'react';")
  wl(view, 0, "import { Table, Tag } from 'antd';")
  wl(view, 0, "import {useQuery} from '@apollo/react-hooks';")
  # A MODIFIER
  wl(view, 0, "import {" + QUERY +"} from '../../queries/" + QUERY_FILE + "';")
  wl(view, 0, "import { Spin, Alert } from 'antd';")
  wl(view, 0, "import {EditOutlined,DeleteOutlined} from '@ant-design/icons';")
  wl(view, 0, "import moment from 'moment';")
  wl(view, 0, '')
  wl(view, 0, "moment.locale('fr');")
  wl(view, 0, '')
  wl(view, 0, "const DATE_viewAT = \"DD.MM.YYYY\";")
  wl(view, 0, "const COL_SIZE = 250;")
  wl(view, 0, '')

def writeComponent(view, object, enums):
  NAME = formatName(object)
  QUERY = "GET_" + NAME.upper()
  FUNCTION_NAME = "Admin" + NAME.capitalize() + "View"
  wl(view, 0, "const " + FUNCTION_NAME + " = () => {")
  wl(view, 1, "const { loading : queryLoading, error: queryError, data } = useQuery(GET_" + QUERY +");")
  wl(view, 0, "")
  wl(view, 1, "if(queryLoading) return <Spin size=\"large\"/>")
  wl(view, 0, "")
  wl(view, 1, "if(queryError) return (")
  wl(view, 2, "<Alert")
  wl(view, 3, "message=\"Une erreur est survenu lors du chargement du programme\"")
  wl(view, 3, "description=\"Veuillez recharger la page. Si le problème subsiste, veuillez contacter le webmaster\"")
  wl(view, 3, "type=\"error\"")
  wl(view, 3, "showIcon")
  wl(view, 2, "/>")
  wl(view, 1, ");")
  wl(view, 0, "")
  writeColumns(view, object, enums)
  wl(view, 0, '')
  wl(view, 1, "const x = columns.length * COL_SIZE;")
  wl(view, 0, '')
  wl(view, 1, "return (<Table className=\"tableData\" columns={columns} dataSource={data." + object.name +"s} scroll={{ x: x }}/>); // Check data name")
  wl(view, 0, "}")
  wl(view, 0, '')
  wl(view, 0, "export default " + FUNCTION_NAME + ";")


def writeColumns(view, object, enums):
  wl(view, 1, "const columns = [") # declaration

  for i, member in enumerate(object.memberVariables):
    if member.typeVariable != "ID":
      wl(view, 2, "{")
      wl(view, 3, "title: '" + member.name.capitalize() + "',")
      wl(view, 3, "dataIndex: '"+ member.name + "',")
      wl(view, 3, "key: '"+ member.name + "',")
      if i == 0: # first column
        wl(view, 3, "width: 150,")
        wl(view, 3, "fixed: 'left'")
      
      # DateTime
      if member.typeVariable == "DateTime":
        wl(view, 3, "render: " + member.name + " => (<span>{moment(" + member.name + ").viewat(DATE_viewAT)}</span>)")

      if member.isList == True:
        wl(view, 3, "render: status => (")
        wl(view, 4, "<span>")
        wl(view, 5, "{status.map(statusUser => {")
        wl(view, 6, "let color = \"geekblue\";")
        wl(view, 6, "return (")
        wl(view, 7, "<Tag color={color} key={statusUser}>")
        wl(view, 8, "{statusUser.toUpperCase()}")
        wl(view, 7, "</Tag>")
        wl(view, 6, ");")
        wl(view, 5, "})}")
        wl(view, 4, "</span>")
        wl(view, 3, "),")
      wl(view, 2, "},")
  
  # Actions
  wl(view, 2, "{")
  wl(view, 3, "title: 'Actions',")
  wl(view, 3, "key: 'operation',")
  wl(view, 3, "fixed: 'right',")
  wl(view, 3, "render: () => <div><a className=\"iconAction\"><EditOutlined style={{color: 'rgba(0, 0, 0, 0.65)', marginRight: '10px'}}/></a><a className=\"iconAction\"><DeleteOutlined style={{color: 'rgba(0, 0, 0, 0.65)'}}/></a></div>,")
  wl(view, 2, "},")
  wl(view, 1, "];") # closing declaration

def wl(view, indent, line):
  '''WRITE LINE'''
  view.write(" " * indent * 2 + line + "\n")

def formatName(object):
  return object.name.lower() if object.name[-1:] == 's' else object.name.lower() + "s"
