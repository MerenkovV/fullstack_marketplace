import React, { useEffect, useState } from 'react'
import { Content } from 'antd/es/layout/layout';
import { Button } from 'antd';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';
import { observer } from 'mobx-react-lite';

const responsive = {
  0: { items: 1 }
};

const DevicePage = observer(() => {

  const {id} = useParams()

  const [device, setDevice]: any = useState({info: []})

  useEffect(()=>{
    fetchOneDevice(Number(id)).then((data)=>{
      setDevice(data)
    })
  }, [])
  

  const items = [<img src={device.img} alt="Device" width='500px' style={{borderRadius: '20px'}}/>];
  return (
    <Content style={{padding: '20px 0 0 0', minHeight: '100vh'}}>
      <h2 style={{textAlign: 'center', fontSize: '40px'}}>{device.name}</h2>
      <div className='top-wrapper' style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{maxWidth: '500px', flex: '500px 0 1', margin: '0 20px'}}>
          <AliceCarousel
              mouseTracking
              items={items}
              responsive={responsive}
              controlsStrategy="alternate"
              disableDotsControls
          />
        </div>
        <div>
          <div className='price-container' style={{width: '500px',height: 'fit-content' , background: '#111947e8', margin: '0 20px', borderRadius: '20px', display: 'flex', justifyContent: 'space-around', alignItems: 'start', padding: '30px 20px'}}>
            <p className='price' style={{fontSize: '20px', color: '#fff', background: 'rgb(40 58 97)', padding: '5px 30px', borderRadius: '10px', fontWeight: 600, margin: 0}}>{device.price} ₽</p>
            <Button type="primary" style={{height: '35px', width: '120px'}}>Купить</Button>
          </div>
          <div className='description-container'>
            <ul style={{padding: '0 25px'}}>
              {device.info.map((item: any)=><li key={item.id} style={{display: 'flex', justifyContent: 'space-between'}}><h3>{item.title}</h3> <p>{item.description}</p></li>)}
            </ul>
          </div>
        </div>
      </div>
    </Content>
  )
})

export default DevicePage