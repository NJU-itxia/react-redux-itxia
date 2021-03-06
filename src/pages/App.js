import React from 'react';
import { view as TopHeader } from "../components/Header";
import { Layout } from 'antd';



const App = ({children}) => {
  return (
    <Layout>
      <TopHeader navList={[{url:"/form/now", text: "预约维修"}, {url:"/form/history", text: "后台管理"}]}/>
      {children}
    </Layout>
  )
}

export default App;