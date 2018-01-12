import React from 'react';

import {Link} from 'react-router';

import { Layout, Menu, Row, Col } from 'antd';
const { Header } = Layout;

const view = ({navList = []}) => {
  return (
    <Header style={{ background: '#fff', position: 'fixed', width: '100%', height: '56px', zIndex: 2}}>
      <Row type="flex" justify="left" >
        <Col xs={20} sm={16} md={12} lg={8} xl={4}>
          <div className='webname'style={{fontSize: '24px', height: '56px', justifyContent: 'top'}}>
            NJU_IT侠预约系统
          </div>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '54px'}}
          > 
            {
              navList.map(
                (navItem, key) => 
                  <Menu.Item key={key+1}><Link to={navItem.url}>{navItem.text}</Link></Menu.Item>
              )
            }
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};

export {view};