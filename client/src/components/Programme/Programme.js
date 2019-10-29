import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {GET_EVENTS} from '../../queries/events.queries';
import BackgroundImage from '../../utils/components/BackgroundImage/BackgroundImage';
import {Row, Col, Spin, Alert, Icon} from 'antd';
import moment from 'moment';
import './Programme.less';

moment.locale('fr');

const Programme = () => {
  const { loading : queryLoading, error: queryError, data } = useQuery(GET_EVENTS);
  
  console.log(data);
  
  if(queryLoading) return <Spin size="large"/>

  if(queryError) return (
    <Alert
      message="Une erreur est survenu lors du chargement du programme"
      description="Veuillez recharger la page. Si le problème subsiste, veuillez contacter le webmaster"
      type="error"
      showIcon
    />
  );

  return (
    <div className="programme-container">
      <Row className="programme-row" type="flex" justify="center">
        <Col span={20}>
          <Row type="flex">
            <Col span={6}><h2>Quoi</h2></Col>
            <Col span={6}><h2>Où</h2></Col>
            <Col span={6}><h2>Quand</h2></Col>
            <Col span={6}><h2>Plus d'info</h2></Col>
          </Row>
          {data.events.map((event) => {
            return (
              <Row key={event.id} type="flex">
                <Col span={6}>
                  {event.name}
                </Col>
                <Col span={6}>
                  {event.location}
                </Col>
                <Col span={6}>
                  {moment(event.start).format("dddd DD.MM.YYYY")}
                </Col>
                <Col span={6}>
                  <Icon className="more-info-icon" type="info-circle" />
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    </div>
  );
}

export default Programme;