import React from 'react';
import { Table, Tag } from 'antd';
import {useQuery} from '@apollo/react-hooks';
import {GET_USERS} from '../../queries/users.queries';
import { Spin, Alert } from 'antd';
import {
  EditOutlined,
  DeleteOutlined
} from '@ant-design/icons';

import moment from 'moment';


moment.locale('fr');

const AdminUserView = () => {
  const { loading : queryLoading, error: queryError, data } = useQuery(GET_USERS);
  
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
      title: 'Prénom',
      dataIndex: 'firstName',
      key: 'firstname',
      width: 150,
      fixed: 'left'
    },
    {
      title: 'Nom',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Rue',
      dataIndex: 'street',
      key: 'street',
    },
    {
      title: 'Ville',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'NPA',
      dataIndex: 'NPA',
      key: 'NPA',
    },
    {
      title: 'Date de naissance',
      dataIndex: 'birthday',
      key: 'birthday',
      render: birthday => (<span>{moment(birthday).format("DD.MM.YYYY")}</span>)
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
      width: 150,
      fixed: 'right',
      render: () => <div><a className="iconAction"><EditOutlined style={{color: 'rgba(0, 0, 0, 0.65)', marginRight: '10px'}}/></a><a className="iconAction"><DeleteOutlined style={{color: 'rgba(0, 0, 0, 0.65)'}}/></a></div>,
    },
  ];

  /*const datatest = [
    {
      id: "asdf1234",
      lastName: "Smith",
      firstName: "James",
      email: "swerky55@gmail.com",
      street: "Ch. de la Motte 4",
      city: "Lully",
      NPA: 1132,
      birthday: moment().set({'year': 1996, 'month': 5, 'date': 21}).format("DD.MM.YYYY"),
      sexe: 'MALE',
      status: ["Actif", "Moniteur","Comite"]
    },
    {
      id: "asdf1245",
      lastName: "Muller",
      firstName: "Bertrand",
      email: "bertrand.muller@gmail.com",
      street: "Ch. du peuplier",
      city: "Préverange",
      NPA: 1135,
      birthday: moment().set({'year': 1994, 'month': 3, 'date': 15}).format("DD.MM.YYYY"),
      sexe: 'MALE',
      status: ["Actif", "Moniteur"]
    },
    {
      id: "poisjdf",
      lastName: "Gremion",
      firstName: "Benjamin",
      email: "benji.gremion@gmail.com",
      street: "Ch. de l'été",
      city: "Tolochenaz",
      NPA: 1131,
      birthday: moment().set({'year': 1998, 'month': 10, 'date': 28}).format("DD.MM.YYYY"),
      sexe: 'MALE',
      status: ["Actif"]
    },
  ];*/

  const x = columns.length * 250;
  
  return (<Table className="tableData" columns={columns} dataSource={data.users} scroll={{ x: x }}/>);
}

export default AdminUserView;