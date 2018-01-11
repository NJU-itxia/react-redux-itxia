import React from 'react';
import { view as TopHeader } from "../components/Header";
import { Layout } from 'antd';



const App = ({children}) => {
  return (
    <Layout>
      <TopHeader/>
      {children}
    </Layout>
  )
}

export default App;