import React from 'react';
import { Table, Tag } from 'antd';
import {useQuery} from '@apollo/react-hooks';
import {GET_NEWS} from '../../queries/news.queries';
import { Spin, Alert } from 'antd';
import {EditOutlined,DeleteOutlined} from '@ant-design/icons';
import moment from 'moment';

moment.locale('fr');

const DATE_viewAT = "DD.MM.YYYY";
const COL_SIZE = 250;

const AdminNewsView = () => {
  const { loading : queryLoading, error: queryError, data } = useQuery(GET_GET_NEWS);

  if(queryLoading) return <Spin size="large"/>

  if(queryError) return (
    <Alert
      message="Une erreur est survenu lors du chargement du programme"
      description="Veuillez recharger la page. Si le problème subsiste, veuillez contacter le webmaster"
      type="error"
      showIcon
    />
  );

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: date => (<span>{moment(date).viewat(DATE_viewAT)}</span>)
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Event',
      dataIndex: 'event',
      key: 'event',
    },
    {
      title: 'Actions',
      key: 'operation',
      fixed: 'right',
      render: () => <div><a className="iconAction"><EditOutlined style={{color: 'rgba(0, 0, 0, 0.65)', marginRight: '10px'}}/></a><a className="iconAction"><DeleteOutlined style={{color: 'rgba(0, 0, 0, 0.65)'}}/></a></div>,
    },
  ];

  const x = columns.length * COL_SIZE;

  return (<Table className="tableData" columns={columns} dataSource={data.Newss} scroll={{ x: x }}/>); // Check data name
}

export default AdminNewsView;
