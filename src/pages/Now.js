import React from 'react';
import {connect} from 'react-redux';
import { WrappedApplyForm } from "../components/ApplyForm";
import { Layout, Menu, Row, Col, Divider } from 'antd';
const {Content} = Layout;

const Now= ({greetings}) => {
  return (
    <Content style={{ padding: '0  300px', marginTop: 64}}>
        <div style={{ background: '#fff', padding: 24, minHeight: 960 }}>
        <Row>
          <h1>你好，请提交你的维修预约</h1>
        </Row>
        <Divider />
        <Row>
          <div>
            <p><b>请定期登录看看 IT 侠是否回复，如果方便处理我们会尽快与你联系，另外 IT 侠也可能通过预留手机与你联系，不是所有的预约都能被解决。</b></p>
            <p><b style={{fontSize: '20px'}}>服务条款</b></p>
              <ul>
                <li>IT侠是纯公益性组织，提供的服务不收取任何费用</li>
                <li>服务对象仅限南大在校师生，以及为IT侠提供过捐助的爱心人士</li>
                <li>IT侠的服务不与任何商业团体挂钩</li>
                <li>IT侠将视用户的个人资料为绝密信息，保护隐私不外泄</li>
                <li>IT侠人员有限，在处理订单时会适当考虑优先级，如不能及时处理，请及时登陆预约平台反馈</li>                
                <li
                  >依业界惯例，IT 侠不对以下情形负责：
                  <ul>
                    <li>意外数据丢失</li>
                    <li>由于机器老化和用料低端，在拆装过程中可能发生的卡扣折断、螺母碎裂等情形</li>
                    <li>对处于不稳定边缘的、有潜在故障风险的机器（如显卡门机器），拆装之后发生无法开机的情形</li>
                    <li>其他非IT侠的主观操作过失造成的意外（如用户自行购买的零配件在安装时导致机器损坏）</li>
                    <li>如机器尚在保修期，请尽量去官方售后，若经IT侠拆机后不能享受售后服务，恕不负责</li>
                  </ul>
                </li>
                <li>IT侠不提供盗版软件的安装服务，如有需求，只能帮助安装试用版，对于安装复杂的专业软件，可以一起探讨，但并不能保证完全解决问题</li>
                <li>本活动的最终解释权归 NoteBook 版所有</li>
              </ul>
          </div>
        </Row>
        <Divider />
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

export default connect(mapStateToProps)(Now);
