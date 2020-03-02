import React from 'react';
import {Row, Col, Divider} from 'antd';
import {Link} from 'react-router-dom';
import './NewMember.less';
import SquareButton from '../../utils/components/SquareButton/SquareButton';

const CardStatus = (props) => {
  const {title, price, children, age = null} = props;
  return (
    <div className="card-status">
      <Row type="flex" justify="space-between" align="middle">
        <Col><h3>{title}</h3></Col>
        <Col><h4>{age}</h4></Col>
      </Row>
      <Divider/>
      <Row>
        <Col>{children}</Col>
      </Row>
      <Row className="price-container" type="flex" justify="center">
        <Col><h3>{price}</h3></Col>
      </Row>
    </div>
  );
}

const NewMember = () => {
  return (
    <>
      <div className="newmember-background"/>
      <Row className="newmember-container" type="flex" justify="center">
        <Col sm={24} md={22} lg={20}>
          <Row type="flex" justify="space-around">
              <Col sm={24} md={11}>
                <CardStatus title="OJ (Organisation de Jeunesse)" age="8 à 16 ans" price="CHF 50.-">
                  <ul>
                    <li>Les OJ peuvent participer aux sorties (4 dimanches) ainsi qu'au camps de ski.</li>
                    <li>Chaque sortie ou camp est organisé au départ de Morges jusque au retour à Morges.</li>
                    <li>Les OJ sont encadrés par une équipe de moniteurs formés lors de chaque activité.</li>
                  </ul>
                </CardStatus> 
              </Col>
              <Col sm={24} md={11}>
                <CardStatus title="Junior" age="16 à 19 ans" price="CHF 60.-">
                  <ul>
                    <li>Les Juniors peuvent participer à tous les évènements du club sauf aux 2 camps (réservés aux OJ).</li>
                    <li>Les Juniors skient librement.</li>
                  </ul>
                </CardStatus>
              </Col>
              <Col sm={24} md={11}>
                <CardStatus title="Actif" age="dès 20 ans" price="CHF 70.-">
                  <ul>
                    <li>Les Actifs peuvent participer à tous les évènements du club sauf au camps (réservés aux OJ).</li>
                    <li>Les Actifs skient librement.</li>
                  </ul>
                </CardStatus>
              </Col>
              <Col sm={24} md={11}>
                <CardStatus title="Passif" price="CHF 40.-">
                  <ul>
                    <li>Les membres passifs sont des supporters du club mais ne participent à aucun évènements.</li>
                  </ul>
                </CardStatus>
              </Col>
              <Col span={24}>
                <Row className="newmember-btn-container" type="flex" justify="center">
                  <Col>
                    <Link to="/devenirmembre/form">
                      <SquareButton>Devenir Membre</SquareButton>
                    </Link>
                  </Col>
                </Row>
              </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default NewMember;