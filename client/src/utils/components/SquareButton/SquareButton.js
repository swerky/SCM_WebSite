import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'antd';55
import "./SquareButton.less";

const SquareButton = (props) => {
  const {children} = props;
  return (
    <Row className="square-button" justify="center">
      <Col>
        {children}
      </Col>
    </Row>
  );
}

export default SquareButton;