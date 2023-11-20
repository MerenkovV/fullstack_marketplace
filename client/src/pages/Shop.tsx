import React, { useState } from 'react'
import { Layout, Menu, ConfigProvider, Card  } from 'antd';
import { useStore } from '../store/RootStore';
import { observer } from 'mobx-react-lite'
import {useNavigate} from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts';

const { Meta } = Card;
const { Content, Sider } = Layout;

const Shop = observer(() => {

  const {device} = useStore()
  const navigate = useNavigate()
  
  const [collapsed, setCollapsed] = useState(false);
  const [currentType, setCurrentType] = useState('')
  const [currentBrand, setCurrentBrand] = useState('')

  return (
     <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" 
        items={device.types.map((type)=>({label: type.name, key: type.id}))}
        selectedKeys={[currentType]}
        onClick={(e)=>{setCurrentType(e.key)}}
        />
      </Sider>
      <Layout>
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                horizontalLineHeight: '35px'
              },
            },
          }}
        >
          <div style={{ padding: 0, maxHeight: "40px", alignItems: "center" }}>
            <Menu
            style={{maxHeight: "40px", alignItems: "center"}}
            theme="dark"
            mode="horizontal"
            items={device.brands.map((brand) => ({
                key: brand.id,
                label: brand.name}))}
            selectedKeys={[currentBrand]}
            onClick={(e)=>{setCurrentBrand(e.key)}}
            />
          </div>
        </ConfigProvider>
        <Content>
          <div style={{padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr)', gap: '20px'}}>
            {
              device.devices.map((item)=>
              <Card
                key={item.id}
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={item.img} />}
                onClick={()=>navigate(DEVICE_ROUTE + '/' + item.id)}
              >
                <Meta title={item.name} description={item.price + ' руб'} />
              </Card>
              )
            }
          </div>
        </Content>
      </Layout>
      </Layout>
  )
})

export default Shop