import React, { Component, useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { Routes } from 'react-router';


import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../services/userService';
import * as authService from '../../services/authService';
import * as profileService from '../../services/profileService';
import Bar from '../../components/bar/Bar';

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  // const navigate = useNavigate();

  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    if (user) {
      profileService.getUserProfile()
      .then(profile => setUserProfile(profile))
    } else {
      setUserProfile(null)
    }
  }, [user])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    // navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} userProfile={userProfile} handleLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route path="/chat" element={<Chat user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : null}
        />

        <Route path="/bar" element={<Bar />} />

      </Routes>
    </>
  )
}

// class App extends Component {
//   state = {
//     user: userService.getUser()
//   }

//   handleLogout = () => {
//     userService.logout();
//     this.setState({ user: null });
//   }

//   handleSignupOrLogin = () => {
//     this.setState({user: userService.getUser()});
//   }

//   render () {
//     return (
//       <>
//         <NavBar 
//           user={this.state.user}
//           handleLogout={this.handleLogout}
//         />
//         <Route exact path='/signup' render={({ history }) => 
//           <SignupPage
//             history={history}
//             handleSignupOrLogin={this.handleSignupOrLogin}
//           />
//         }/>
//         <Route exact path='/login' render={({ history }) => 
//           <LoginPage
//             history={history}
//             handleSignupOrLogin={this.handleSignupOrLogin}
//           />
//         }/>
//       </>
//     );
//   }
// }

export default App;
