import React from 'react';
import SquareButton from '../../utils/components/SquareButton/SquareButton';
import BackgroundImage from '../../utils/components/BackgroundImage/BackgroundImage';
import {
  Row, 
  Col, 
  Button
} from 'antd';
import './Home.less';

const Home = () => {
  return(
    <div className="home-container">
      <BackgroundImage src="../../assets/homeBackground.jpg" alt="background image home"/>
      <Row className="row-home" type="flex" justify="center" align="middle">
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
                    <SquareButton dest="/">Programme</SquareButton>
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} sm={12}>
                  <Row type="flex" justify="center">
                    <Col>
                      <SquareButton dest="/">Devenir membre</SquareButton>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row> 
    </div>  
  )
}

export default Home;