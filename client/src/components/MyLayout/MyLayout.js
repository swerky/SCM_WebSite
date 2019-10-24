import React from 'react';
import {Link} from 'react-router-dom';
import { Row, Col } from 'antd';
import './MyLayout.less'

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Row type="flex" justify="start">
        <Col span={3}>
          <Link to="/">Accueil</Link>
        </Col>
        <Col span={3}>
          <Link to="/">Programme</Link>
        </Col>
        <Col span={3}>
          <Link to="/">Contacts</Link>
        </Col>
        <Col span={3}>
          <Link to="/">Galerie</Link>
        </Col>
        <Col span={3}>
          <Link to="/">Liens</Link>
        </Col>
        <Col span={3}>
          <Link to="/">Le club</Link>
        </Col>
        <Col span={3}>
          <Link to="/">News</Link>
        </Col>
      </Row>
    </nav>
  );
}

const MyLayout = ({children}) => {
  return (
    <>
      <NavBar/>
      <main>
        <div className="main-container">
          {children}
        </div>
      </main>
    </>
  );
}

export default MyLayout;