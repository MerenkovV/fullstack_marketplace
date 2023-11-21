import React from 'react'
import { Menu, ConfigProvider } from 'antd';

const TopMenuShop = ({device, currentBrand, setCurrentBrand}:any) => {
  return (
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
        items={device.brands.map((brand: any) => ({
            key: brand.id,
            label: brand.name}))}
        selectedKeys={[String(currentBrand)]}
        onClick={(e)=>{
          if(Number(e.key) === currentBrand) return setCurrentBrand(0)
          setCurrentBrand(Number(e.key))
        }}
        />
        </div>
    </ConfigProvider>
  )
}

export default TopMenuShop