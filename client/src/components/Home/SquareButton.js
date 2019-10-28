import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'antd';
import "./SquareButton.less";

const SquareButton = (props) => {
  const {dest, children} = props;
  return (
    <Row className="square-button" justify="center">
      <Col>
        <Link className="square-button-link" to={dest}>
          {children}
        </Link>
      </Col>
    </Row>
  );
}

export default SquareButton;