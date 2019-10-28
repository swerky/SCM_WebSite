import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {GET_EVENTS} from '../../queries/events.queries';
import BackgroundImage from '../../utils/components/BackgroundImage/BackgroundImage';
import {Row, Col} from 'antd';

const Programme = () => {
  //const { loading : queryLoading, error: queryError, data } = useQuery(GET_EVENTS);

  return (
    <>
      <BackgroundImage src="../../assets/programmeBackground.jpg" alt="Background image programme"/>
      <Row type="flex" justify="center">
        <Col>
          <h1>Welcome on the Programme page</h1>
          <p>currently work in progress</p>
        </Col>
      </Row>
    </>
  );
}

export default Programme;