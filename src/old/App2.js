import fire from './firebase';
import { React, useState, useEffect} from 'react';
// import { Layout, Menu, message } from 'antd';
// import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
// import Homepage from './components/homepage'
import Login from './components/Login'
// import Registration from './components/signIn';
// import headerLogo from './img/sibdev-logo-header.svg'
import Hero from './components/Hero'


// const { Header, Content } = Layout;

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire.auth().signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;  
      }
    });
  }

  const handleSignup = () => {
    clearErrors();
    fire.auth().createUserWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(email.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;  
      }
    });
  }

  const handleLogout = () => {
    fire.auth().signOut();
  }  

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        clearInputs();
      } else {
        setUser("");
      }
    })
  } 
  
  useEffect(() => {
    authListener();
  }, [])

  return (
    <div className="App">
        {user ? (
          <Hero handleLogout={handleLogout}/>
        ) :
        (
          <Login 
          email={email} 
          setEmail={setEmail} 
          password={password} 
          setPassword={setPassword} 
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          />
        )}
    </div>
  );
}

export default App;

// return (
//   <div className="App">
//     <BrowserRouter>
//       <Layout className="layout">
//         <Switch>
//           <Route path="/(|registration|favorites)"></Route>
//           <Route>
//             <Header style={{ padding: '0', zIndex: '1' }}>
//               <Menu style={{ width: '100%', padding: '0 calc(15% - 12px) 0 calc(15% - 10px)', borderBottom: '1px solid #f1f1f1' }} mode="horizontal">
//                 <img src={headerLogo} alt={'Sibdev логотип'}/>
//                 <Menu.Item key="1">
//                   <Link to={'/homepage'}>Поиск</Link>
//                 </Menu.Item>
//                 <Menu.Item key="2">
//                   <Link to={'/favorites'}>Избранное</Link>
//                 </Menu.Item>
//                 <Menu.Item style={{ float: 'right'}} key="3">
//                   <Link to={'/'}>Выйти</Link>
//                 </Menu.Item>
//               </Menu>
//             </Header>
//           </Route>
//         </Switch>
//         <Content style={{ width: '100%', height: '100%', padding: '0 15%' }}>
//           <div className="site-layout-content">
//             <Switch>
//               <Route exact path="/" component={Login} />
//               <Route exact path="/favorites"/>
//               <Route exact path="/homepage" component={Homepage} />
//               <Route exact path="/registration" component={Registration} />
//               <Route exact path="/result"/>
//             </Switch>
//           </div>
//         </Content>
//       </Layout>
//     </BrowserRouter>  
//   </div>
// );

