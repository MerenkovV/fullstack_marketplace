import React from 'react'
import { useStore } from '../store/RootStore'
import { Header } from 'antd/es/layout/layout'
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import { BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import style from './styles/NavBarStyle.module.css'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
    const {user} = useStore()

  return (
    <Header style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
        <NavLink className={style.logo} to={SHOP_ROUTE}>Device70</NavLink>
        <div className={style.login_panel}>
            
            <NavLink to={LOGIN_ROUTE}>
                <UserOutlined />
            </NavLink>

            <NavLink to={BASKET_ROUTE}>
                <ShoppingCartOutlined />
            </NavLink>

        </div>
    </Header>
  )
})

export default NavBar