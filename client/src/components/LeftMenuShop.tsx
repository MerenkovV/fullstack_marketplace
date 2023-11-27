import React, {useState} from 'react'
import { Layout, Menu } from 'antd'
import DeviceStore, { DeviceTypes } from '../store/DeviceStore';
const { Sider } = Layout;

const LeftMenuShop = ({device, currentType, setCurrentType}: {device: DeviceStore, currentType: number, setCurrentType:(arg0:number)=>void}) => {
    const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" 
        items={device.types.map((type:DeviceTypes)=>({label: type.name, key: type.id}))}
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