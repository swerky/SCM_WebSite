import React from 'react';
import { Table, Tag } from 'antd';
import {useQuery} from '@apollo/react-hooks';
import {GET_USER} from '../../queries/User.queries.queries';
import { Spin, Alert } from 'antd';
import {EditOutlined,DeleteOutlined} from '@ant-design/icons';
import moment from 'moment';

moment.locale('fr');

const DATE_FORMAT = "DD.MM.YYYY";
const COL_SIZE = 250;

const AdminUserView = () => {
  const { loading : queryLoading, error: queryError, data } = useQuery(GET_GET_USER);

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
      title: 'Lastname',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Firstname',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Street',
      dataIndex: 'street',
      key: 'street',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Npa',
      dataIndex: 'NPA',
      key: 'NPA',
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      key: 'birthday',
      render: birthday => (<span>{moment(birthday).format(DATE_FORMAT)}</span>)
    },
    {
      title: 'Sexe',
      dataIndex: 'sexe',
      key: 'sexe',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => (
        <span>
          {status.map(statusUser => {
            let color = "geekblue";
            return (
              <Tag color={color} key={statusUser}>
                {statusUser.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Actions',
      key: 'operation',
      fixed: 'right',
      render: () => <div><a className="iconAction"><EditOutlined style={{color: 'rgba(0, 0, 0, 0.65)', marginRight: '10px'}}/></a><a className="iconAction"><DeleteOutlined style={{color: 'rgba(0, 0, 0, 0.65)'}}/></a></div>,
    },
  ];

  const x = columns.length * COL_SIZE;

  return (<Table className="tableData" columns={columns} dataSource={data.Users} scroll={{ x: x }}/>); // Check data name
}

export default AdminUserView;
