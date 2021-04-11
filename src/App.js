import React, { useState, useEffect } from 'react';
import fire from './firebase';
import Login from './Login.js';
import { Layout, Menu, Spin } from 'antd';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage'
import headerLogo from './img/sibdev-logo-header.svg'
import Favorites from './components/favorites';

const { Header, Content } = Layout;

function App() {

  const [user, setUser] = useState('');
  const [request, setRequest] = useState(null);

  function handleChange(newRequest) {
    setRequest(newRequest);
  }

  useEffect(() => {
    authListener();
  }, []);

  const authListener = () => {
    fire.auth().onAuthStateChanged((dbUser) => {
      if (dbUser) {
        setUser(true);
      } else {
        setUser(null);
      }
    })
  }

  const logout = () => {
      fire.auth().signOut();
  }
  return (
      <div className="App">
          {user === '' ? <div className={'loader'}><Spin className={'loader__spinner'}/></div> : ''}
          { user ? 
          (<BrowserRouter>
            <Layout className="layout">
              <Header style={{ padding: '0', zIndex: '1' }}>
                <Menu style={{ width: '100%', padding: '0 calc(15% - 12px) 0 calc(15% - 10px)', borderBottom: '1px solid #f1f1f1' }} mode="horizontal">
                  <img src={headerLogo} alt={'Sibdev логотип'}/>
                  <Menu.Item key="1">
                    <Link to={'/'}>Поиск</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to={'/favorites'}>Избранное</Link>
                  </Menu.Item>
                  <Menu.Item style={{ float: 'right'}} key="3" onClick={logout}>
                    Выйти
                  </Menu.Item>
                </Menu>
              </Header>
              <Content style={{ width: '100%', height: '100%', padding: '0 15%' }}>
                <div className="site-layout-content">
                  <Switch>
                      <Route exact path="/">
                        <Homepage rid={request}/>
                      </Route>
                      <Route exact path="/favorites">
                        <Favorites onChange={handleChange}/>
                      </Route>
                  </Switch>
                </div>
              </Content>
            </Layout>
          </BrowserRouter>): ( <Login /> ) }
      </div>
  );
}

export default App;
