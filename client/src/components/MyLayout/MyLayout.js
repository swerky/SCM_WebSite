import React from 'react';
import {Link} from 'react-router-dom';
import { Row, Col } from 'antd';
import './MyLayout.less'

const NavBar = () => {
  return (
    <Row className="nav-bar" type="flex" justify="start" align="middle">
      <Col lg={0} xl={2}></Col>
      <Col lg={8} xl={6}>
        <Link to="/"><h1 id="title">SCM</h1></Link>
      </Col>
      <Col lg={16} xl={14}>
        <Row className="row" type="flex" justify="end" gutter={35}>
          <Col>
            <Link to="/programme"><h2>Programme</h2></Link>
          </Col>
          <Col>
            <Link to="/"><h2>Devenir membre</h2></Link>
          </Col>
          <Col>
            <Link to="/"><h2>Contacts</h2></Link>
          </Col>
          <Col>
            <Link to="/"><h2>Galerie</h2></Link>
          </Col>
          <Col>
            <Link to="/"><h2>Le club</h2></Link>
          </Col>
          <Col>
            <Link to="/"><h2>News</h2></Link>
          </Col>
        </Row>
      </Col>
      <Col lg={0} xl={2}></Col>
    </Row>
  );
}

const MyLayout = ({children}) => {
  return (
    <div className="main-content-container">
      <NavBar/>
      <div className="main-content">
          {children}
      </div>
    </div>
  );
}

export default MyLayout;