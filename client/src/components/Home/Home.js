import React from 'react';
import SquareButton from '../../utils/components/SquareButton/SquareButton';
import BackgroundImage from '../../utils/components/BackgroundImage/BackgroundImage';
import {
  Row, 
  Col, 
  Button
} from 'antd';
import {Link} from 'react-router-dom';
import './Home.less';

const Home = () => {
  return(
    <>
      <div className="home-background"/>
      <Row className="home-container" type="flex" justify="center" align="middle">
        <Col className="col-home">
          <Row type="flex" justify="center">
            <Col span={24}><span className="welcome-title">Ski Club Morges</span></Col>
          </Row>
          <Row className="button-container">
            <Col span={24}>
              <Row type="flex" justify="center" gutter={[16, 24]}>
                <Col xs={24} sm={12}>
                  <Row type="flex" justify="center">
                    <Col>
                    <Link to="/programme">
                      <SquareButton>Programme</SquareButton>
                    </Link>
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} sm={12}>
                  <Row type="flex" justify="center">
                    <Col>
                      <Link to="/devenirmembre">
                        <SquareButton dest="/devenirmembre">Devenir membre</SquareButton>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row> 
    </>  
  )
}

export default Home;