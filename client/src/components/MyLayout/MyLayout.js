import React, { useState, useRef, useLayoutEffect } from 'react';
import {Link} from 'react-router-dom';
import { Row, Col, Drawer, Icon, Divider} from 'antd';
import Media from 'react-media';

import './MyLayout.less';
import { useScroll } from '../../hooks/useScroll';

/* PATH */
const pathHome = "/";
const pathProgramme = "/programme";
const pathMember = "/devenirmembre";
const pathContacts = "/";
const pathGalerie = "/";
const pathClub = "/";
const pathNews = "/";

/* NAVBAR DESKTOP */
const NavBar = () => {
  const scroll = useScroll();

  return (
    <Row className={scroll.y > 0 ? "nav-bar-not-top": "nav-bar"} type="flex" justify="start" align="middle">
      <Col lg={1} xl={2}></Col>
      <Col lg={1} xl={2}>
        <Link to={pathHome}><h1 id="title" className={scroll.y > 0 ? "title-color-not-top": ""}>SCM</h1></Link>
      </Col>
      <Col lg={21} xl={18}>
        <Row className="row" type="flex" justify="end" gutter={35}>
          <Col>
            <Link to={pathProgramme}><h2 className={scroll.y > 0 ? "title-color-not-top": ""}>Programme</h2></Link>
          </Col>
          <Col>
            <Link to={pathMember}><h2 className={scroll.y > 0 ? "title-color-not-top": ""}>Devenir membre</h2></Link>
          </Col>
          <Col>
            <Link to={pathContacts}><h2 className={scroll.y > 0 ? "title-color-not-top": ""}>Contacts</h2></Link>
          </Col>
          <Col>
            <Link to={pathGalerie}><h2 className={scroll.y > 0 ? "title-color-not-top": ""}>Galerie</h2></Link>
          </Col>
          <Col>
            <Link to={pathClub}><h2 className={scroll.y > 0 ? "title-color-not-top": ""}>Le club</h2></Link>
          </Col>
          <Col>
            <Link to={pathNews}><h2>News</h2></Link>
          </Col>
        </Row>
      </Col>
      <Col lg={1} xl={2}></Col>
    </Row>
  );
}

/* NAVBAR MOBILE */
const NavBarMobile = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Row className="nav-bar" type="flex" justify="end" align="middle">
        <Col span={2}><Icon className="menu-icon" onClick={showDrawer} type="menu" /></Col>
      </Row>
      <Drawer
          placement="right"
          closable={true}
          onClose={onClose}
          visible={visible}
          width={350}
          maskStyle={{backgroundColor: 'transparent'}}
        >
          <Link to={pathHome}onClick={onClose}><h2 className="nav-mobile-content" id="title">SCM</h2></Link>
          <Divider className="divider"/>
          <ElementNavMobile to={pathProgramme} icon="calendar" text="Programme" onClose={onClose}/>
          <Divider className="divider"/>
          <ElementNavMobile to={pathMember} icon="solution" text="Devenir membre" onClose={onClose}/>
          <Divider className="divider"/>
          <ElementNavMobile to={pathContacts} icon="contacts" text="Contacts" onClose={onClose}/>
          <Divider className="divider"/>
          <ElementNavMobile to={pathGalerie} icon="picture" text="Galerie" onClose={onClose}/>
          <Divider className="divider"/>
          <ElementNavMobile to={pathClub} icon="team" text="Le club" onClose={onClose}/>
          <Divider className="divider"/>
          <ElementNavMobile to={pathNews} icon="mail" text="News" onClose={onClose}/>
          <Divider className="divider"/>
        </Drawer>
    </>
  );
}

/* Element inside liste nav mobile */
const ElementNavMobile = (props) => {
  const {to, icon, text, onClose} = props;
  return (
    <Link to={to} onClick={onClose}>
      <Row type="flex" align="middle">
        <Col span={6}>
          <Icon className="nav-mobile-content" type={icon} />
        </Col>
        <Col span={18}>
          <h3 className="nav-mobile-content" >{text}</h3>
        </Col>
      </Row>
    </Link>
  );
}

const MyLayout = ({children}) => {
  return (
    <div>
      <Media queries={{ small: { maxWidth: '768px' } }}>
        {matches =>
          matches.small ? (
            <NavBarMobile/>
          ) : (
            <NavBar/>
          )
        }
      </Media>
      <div className="main-content">
          {children}
      </div>
    </div>
  );
}

export default MyLayout;