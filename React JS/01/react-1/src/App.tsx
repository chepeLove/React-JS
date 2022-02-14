import React, {Component, ComponentType} from 'react'
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Link, NavLink, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {LoginPage} from "./Components/Login/LoginPage";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./Components/Common/Preloader/Preloader";
import store, {AppStateType} from "./Redux/redux-store";
import {withSuspense} from "./HOC/withSuspense";
import {UsersPage} from "./Components/Users/UsersContainer";
import 'antd/dist/antd.css';
import {Avatar, Button, Col, Row} from "antd";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import style from "./Components/Navbar/Navbar.module.css";
import {Header} from "./Components/Header/Header";

const { SubMenu } = Menu;
const {Content, Footer, Sider } = Layout;

const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"))

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}
const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)

class App extends React.Component<MapPropsType & DispatchPropsType> {

    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('Some error occurred')
        // console.error(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <Layout>
               <Header/>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                // defaultSelectedKeys={['1']}
                                // defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">
                                    <Menu.Item key="1"> <Link to="/profile">Profile</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/dialogs" >Massages</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Users ">
                                    <Menu.Item key="5"><Link to="/users" >Users</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined />} title="News">
                                    <Menu.Item key="9"><Link to="/news" >News</Link></Menu.Item>
                                </SubMenu>
                                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="Music">
                                            <Menu.Item key="9"><Link to="/music">Music</Link></Menu.Item>
                                        </SubMenu>
                                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="Settings">
                                            <Menu.Item key="9"><Link to="/settings" >Settings</Link></Menu.Item>
                                        </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Switch>
                                <Redirect exact from="/" to="/profile"/>
                                <Route path='/dialogs' render={() =><SuspendedDialogs/> }/>
                                <Route path='/users' render={() => <UsersPage pageTitle={'Users'}/>}/>
                                <Route path='/profile:userId?' render={()=><SuspendedProfile/>}/>
                                <Route path='/music' render={() => <Music/>}/>
                                <Route path='/news' render={() => <News/>}/>
                                <Route path='/settings' render={() => <Settings/>}/>
                                <Route path='/login' render={() => <LoginPage/>}/>
                                <Route path='*' render={() => <div>404 NOT FOUND
                                    <Button type={"primary"}>OK</Button>
                                </div>}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>

            // <div className='app-wrapper'>
            //     <HeaderContainer/>
            //     <Navbar/>
            //     <div className='app-wrapper-content'>

            //     </div>
            // </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App)

let SocialNetworkJSApp: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
                <AppContainer/>
            </React.StrictMode>,
        </Provider>,
    </BrowserRouter>
}

export default SocialNetworkJSApp