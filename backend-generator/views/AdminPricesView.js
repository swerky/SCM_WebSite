import React from 'react';
import { Table, Tag } from 'antd';
import {useQuery} from '@apollo/react-hooks';
import {GET_PRICES} from '../../queries/prices.queries';
import { Spin, Alert } from 'antd';
import {EditOutlined,DeleteOutlined} from '@ant-design/icons';
import moment from 'moment';

moment.locale('fr');

const DATE_viewAT = "DD.MM.YYYY";
const COL_SIZE = 250;

const AdminPricesView = () => {
  const { loading : queryLoading, error: queryError, data } = useQuery(GET_GET_PRICES);

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
      title: 'Event',
      dataIndex: 'event',
      key: 'event',
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
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Actions',
      key: 'operation',
      fixed: 'right',
      render: () => <div><a className="iconAction"><EditOutlined style={{color: 'rgba(0, 0, 0, 0.65)', marginRight: '10px'}}/></a><a className="iconAction"><DeleteOutlined style={{color: 'rgba(0, 0, 0, 0.65)'}}/></a></div>,
    },
  ];

  const x = columns.length * COL_SIZE;

  return (<Table className="tableData" columns={columns} dataSource={data.Prices} scroll={{ x: x }}/>); // Check data name
}

export default AdminPricesView;
