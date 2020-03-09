import React from 'react';
import { Row, Col, Spin, Alert } from 'antd';

const Payment = (props) =>{
  const {end} = props;
  return (
    <Row>
      <Col span={24}>
        La finance d'inscription qui validera l'inscription est à verser au plus tard pour le {end} à:
      </Col>
      <Col span={24}>
        Ski-Club de Morges
      </Col>
      <Col span={24}>
        IBAN : CH04 8044 5000 0054 6686 6
      </Col>
      <Col span={24}>
        en mentionnant le nom de l'événement et du/des participant(s).
      </Col>
    </Row>
  );
}

const ProgrammeDetails = (props) => {
  const {event} = props
  const {name, location, transport, appointement, prices, endInscription, startInscription, start, end, organizers, picture, informations}
  return (
    <>
      <h1>{name}</h1>
      <Row>
        <Col span={12}>Date</Col>
        <Col span={12}>{start} au {end}</Col>
      </Row>
      <Row>
        <Col span={12}>Rendez-vous</Col>
        <Col span={12}>{appointement}</Col>
      </Row>
      {transport &&
        <Row>
          <Col span={12}>Transport</Col>
          <Col span={12}>{transport}</Col>
        </Row>
      }
      {prices &&
        <Row>
          <Col span={12}>Prix</Col>
          <Col span={12}>
            {prices.map(price => {
              return (
                <Row>
                  <Col span={4}>{price.status}</Col>
                  <Col span={20}>{price.price}</Col>
                </Row>
              );
            })}
          </Col>
        </Row>
      }
      {offert &&
        <Row>
          <Col span={12}>Le prix comprend</Col>
          <Col span={12}>{offert}</Col>
        </Row>
      }
      <Row>
        <Col span={12}>Délai d'inscription</Col>
        <Col span={12}>{endInscription}</Col>
      </Row>
      <Row>
        <Col span={12}>Responsable</Col>
        <Col span={12}>
          {organizers.map((organizer) => {
            return (
              <Row>
                <Col span={24}>{organizer.firstName} {organizer.lastName}</Col>
              </Row>
            );
          })}
        </Col>
      </Row>
      {informations &&
        <Row>
          <Col span={12}>Informations</Col>
          <Col span={12}>{informations}</Col>
        </Row>
      }
      {prices &&
        <Payment end={end}/>
      }
    </>
  );
}

export default ProgrammeDetails;