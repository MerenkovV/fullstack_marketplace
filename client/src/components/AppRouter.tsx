import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'
import { useStore } from '../store/RootStore'
import { Layout } from 'antd'
import NavBar from './NavBar'


const AppRouter = () => {
  const {user} = useStore()
  
  return (
    <Layout>
      <NavBar/>
      <Routes>
        {
          user.isAuth && authRoutes.map(({path, Component})=>
            <Route key={path} path={path} element={<Component/>} />
          )
        }
        {
          publicRoutes.map(({path, Component})=>
            <Route key={path} path={path} element={<Component/>} />
          )
        }
        <Route path='*' element={<Navigate replace to={SHOP_ROUTE}/>} />
      </Routes>
    </Layout>
  )
}

export default AppRouter