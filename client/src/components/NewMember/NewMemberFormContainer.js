import React from 'react';
import NewMemberForm from './NewMemberForm';
import {Row, Col} from 'antd';

import './NewMemberFormContainer.less';

const NewMemberFormContainer = () => {
  return (
    <div>
      <div className="newmember-background"></div>
      <Row className="newmember-container" type="flex" justify="center">
        <Col xs={22} sm={10}>
          <NewMemberForm/>
        </Col>
      </Row>
    </div>
  );
}

export default NewMemberFormContainer;