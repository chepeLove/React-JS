import React, {Component, ComponentType} from 'react'
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./Components/Common/Preloader/Preloader";
import store, {AppStateType} from "./Redux/redux-store";
import {withSuspense} from "./HOC/withSuspense";

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
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Redirect exact from="/" to="/profile"/>
                        <Route path='/dialogs' render={() =><SuspendedDialogs/> }/>
                        <Route path='/users' render={() => <UsersContainer pageTitle={'Users'}/>}/>
                        <Route path='/profile:userId?' render={()=><SuspendedProfile/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
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