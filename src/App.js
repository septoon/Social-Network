import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';


const App = props => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar navbarPage={props.state.navbarPage}/>
        <div className='app-wrapper-content'>

          {/* <Route path='/dialogs' render={ () => <Dialogs dialogs={props.dialogsPage.dialogsData} messages={props.dialogsPage.messagesData}/> } />
          <Route path='/profile' render={ () => <Profile posts={props.posts}/> } /> */}

          <Route path='/dialogs' render={ () => <Dialogs dialogsPage={props.state.dialogsPage} addMessage={props.addMessage} /> } />
          <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage} addPost={props.addPost}/> } />
          <Route path='/news' render={ () => <News /> } />
          <Route path='/music' render={ () => <Music /> } />
          <Route path='/settings' render={ () => <Settings /> } />
          <Route path='/friends' render={ () => <Friends /> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
