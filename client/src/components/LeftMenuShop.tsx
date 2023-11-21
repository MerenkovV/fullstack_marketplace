import React, {useState} from 'react'
import { Layout, Menu } from 'antd'
const { Sider } = Layout;

const LeftMenuShop = ({device, currentType, setCurrentType}: any) => {
    const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" 
        items={device.types.map((type:any)=>({label: type.name, key: type.id}))}
        selectedKeys={[String(currentType)]}
        onClick={(e)=>{
          if(Number(e.key) === currentType) return setCurrentType(0)
          setCurrentType(Number(e.key))
        }}
        />
    </Sider>
    )
}

export default LeftMenuShop