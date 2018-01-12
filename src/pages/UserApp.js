import React from 'react';
import { view as TopHeader } from "../components/Header";
import { Layout } from 'antd';



const UserApp = ({children}) => {
  return (
    <Layout>
      <TopHeader navList={[{url:"/form/now", text: "当前请求"}, {url:"/form/history", text: "历史请求"}]}/>
      {children}
    </Layout>
  )
}

export default UserApp;