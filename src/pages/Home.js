import React from 'react';
import {connect} from 'react-redux';
import { WrappedApplyForm } from "../components/ApplyForm";
import { Layout, Menu, Row, Col } from 'antd';
const {Content} = Layout;

const Home = ({greetings}) => {
  return (
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 1960 }}>
        <Row>
          <Col>
            <WrappedApplyForm/>
          </Col>
        </Row>    
        </div>
    </Content>
  );
};

const mapStateToProps = (state) => ({greetings: state.greetings});

export default connect(mapStateToProps)(Home);
