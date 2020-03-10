import React from 'react';
import { Table, Tag } from 'antd';
import {useQuery} from '@apollo/react-hooks';
import {GET_EVENTS} from '../../queries/events.queries';
import { Spin, Alert } from 'antd';
import {EditOutlined,DeleteOutlined} from '@ant-design/icons';
import moment from 'moment';

moment.locale('fr');

const DATE_viewAT = "DD.MM.YYYY";
const COL_SIZE = 250;

const AdminEventsView = () => {
  const { loading : queryLoading, error: queryError, data } = useQuery(GET_GET_EVENTS);

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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Transport',
      dataIndex: 'transport',
      key: 'transport',
    },
    {
      title: 'Appointment',
      dataIndex: 'appointment',
      key: 'appointment',
    },
    {
      title: 'Prices',
      dataIndex: 'prices',
      key: 'prices',
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
      title: 'Endinscription',
      dataIndex: 'endInscription',
      key: 'endInscription',
      render: endInscription => (<span>{moment(endInscription).viewat(DATE_viewAT)}</span>)
    },
    {
      title: 'Startinscription',
      dataIndex: 'startInscription',
      key: 'startInscription',
      render: startInscription => (<span>{moment(startInscription).viewat(DATE_viewAT)}</span>)
    },
    {
      title: 'Start',
      dataIndex: 'start',
      key: 'start',
      render: start => (<span>{moment(start).viewat(DATE_viewAT)}</span>)
    },
    {
      title: 'End',
      dataIndex: 'end',
      key: 'end',
      render: end => (<span>{moment(end).viewat(DATE_viewAT)}</span>)
    },
    {
      title: 'Offert',
      dataIndex: 'offert',
      key: 'offert',
    },
    {
      title: 'Informations',
      dataIndex: 'informations',
      key: 'informations',
    },
    {
      title: 'Organizers',
      dataIndex: 'organizers',
      key: 'organizers',
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
      title: 'Picture',
      dataIndex: 'picture',
      key: 'picture',
    },
    {
      title: 'Actions',
      key: 'operation',
      fixed: 'right',
      render: () => <div><a className="iconAction"><EditOutlined style={{color: 'rgba(0, 0, 0, 0.65)', marginRight: '10px'}}/></a><a className="iconAction"><DeleteOutlined style={{color: 'rgba(0, 0, 0, 0.65)'}}/></a></div>,
    },
  ];

  const x = columns.length * COL_SIZE;

  return (<Table className="tableData" columns={columns} dataSource={data.Events} scroll={{ x: x }}/>); // Check data name
}

export default AdminEventsView;
