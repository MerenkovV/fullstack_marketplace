import React, { useEffect, useState } from 'react'
import { Layout, Card  } from 'antd';
import { useStore } from '../store/RootStore';
import { observer } from 'mobx-react-lite'
import {useNavigate} from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts';
import LeftMenuShop from '../components/LeftMenuShop';
import TopMenuShop from '../components/TopMenuShop';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI';

const { Meta } = Card;
const { Content} = Layout;

const Shop = observer(() => {

  const {device} = useStore()
  const navigate = useNavigate()

  const [currentType, setCurrentType] = useState(0)
  const [currentBrand, setCurrentBrand] = useState(0)
  const [devicesCount, setDevicesCount] = useState(0)

  let gridColumnStyle: string = 'repeat(auto-fit, minmax(260px, 1fr)'

  useEffect(()=>{
    fetchTypes().then((data)=>{
      device.setTypes(data)
    })
    fetchBrands().then((data)=>{
      device.setBrands(data)
    })
  }, [])

  useEffect(()=>{
    fetchDevices(currentType, currentBrand).then((data)=>{
      device.setDevices(data.rows)
      setDevicesCount(Number(data.count))
      gridColumnStyle = (data.count <= 5 ? 'repeat(auto-fit, 260px)' : 'repeat(auto-fit, minmax(260px, 1fr)')
    })
  }, [currentType, currentBrand])
  


  return (
     <Layout style={{ minHeight: '100vh' }}>
        <LeftMenuShop device={device} currentType={currentType} setCurrentType={setCurrentType}/>
      <Layout>
        <TopMenuShop device={device} currentBrand={currentBrand} setCurrentBrand={setCurrentBrand}/>
        <Content>
          <div style={{padding: '20px', display: 'grid', gridTemplateColumns: `${devicesCount<= 5 ? 'repeat(auto-fit, 260px)' : 'repeat(auto-fit, minmax(260px, 1fr)'}`, gap: '20px'}}>
            {
              device.devices.map((item)=>
              <Card
                key={item.id}
                hoverable
                style={{ width: '240px', display: 'grid', gridTemplateRows: 'auto 110px'}}
                cover={<img alt="example" src={process.env.REACT_APP_API_URL + item.img} style={{width:'230px', paddingTop: '10px'}}/>}
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