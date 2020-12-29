import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Friends from './components/Friends/Friends'
import Login from './components/Login/Login'
import { connect } from 'react-redux'
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import store from './redux/redux-store'
import {Provider} from 'react-redux'
import { withSuspense } from './hoc/withSuspense'

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if(this.props.initialized === false) <Preloader /> 

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ withSuspense(DialogsContainer) } />
          <Route path='/profile/:userId?' render={ withSuspense(ProfileContainer) } />
          <Route path='/news' render={ () => <News /> } />
          <Route path='/music' render={ () => <Music /> } />
          <Route path='/users' render={ withSuspense(UsersContainer) } />
          <Route path='/settings' render={ () => <Settings /> } />
          <Route path='/friends' render={ () => <Friends /> } />
          <Route path='/login' render={ () => <Login /> } />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, { initializeApp }) (App) 

const SocialNetworkApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store} >     
        <AppContainer />
      </Provider> 
    </BrowserRouter>
  )
}

// export default AppContainer
export default SocialNetworkApp




 