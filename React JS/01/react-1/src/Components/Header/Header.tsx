import React from 'react';
import s from './Header.module.css';
import {Link, NavLink} from "react-router-dom";
import {Avatar, Button, Col, Layout, Menu, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUserLogin, selectIsAuth} from "../../Redux/auth-selectors";
import {logout} from "../../Redux/auth-reducer";

export type MapPropsType = {}

export const Header: React.FC<MapPropsType> = (props) => {
    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentUserLogin)
    const dispatch = useDispatch()
    const logoutCallback = () => {
        dispatch(logout())
    }
    const {Header} = Layout;
    return <Header className="header">
        <Row>
            <Col span={18}><Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            </Col>
            {isAuth
                ?<><Col span={1}>
                    <Avatar alt={login || ''} style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                </Col>
                    <Col span={5}>
                       <Button onClick={logoutCallback}>Log out</Button>
                    </Col>
                </>
                : <Col span={6}>
                    <Link to={'/login'}>Login</Link>
                    </Col>}
        </Row>
    </Header>

    // <header className={s.header}>
    //     <img src="https://i.pinimg.com/736x/23/80/0b/23800b995292379883a15d9a4c382b22--awesome-logos-animal-logo.jpg" />
    //
    //     <div className={s.loginBlock}>

    //     </div>
    // </header>
}
