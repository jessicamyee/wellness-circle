// package imports
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';

// import styling
import './App.css';
import MainContainer from './containers/MainContainer';

// component imports
import Layout from './layouts/Layout';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

// function imports
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  }, [])
  
  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/wellness_data');
  }
  
  const handleSignUp = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/wellness_data');
  }
  
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  }

  return (
    <div className="App">
      <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
      >
        <Switch>
          <Route path='/login'>
            <Login
              handleLogin={handleLogin}
            />
          </Route>
          <Route path='/signup'>
            <SignUp
              handleSignUp={handleSignUp}
            />
          </Route>
          <Route path='/'>
            <MainContainer
              currentUser={currentUser}
            />
          </Route>
    
        </Switch>
      </Layout>
    </div>
  );
} 

// function SetAuthTokenIfRefreshed() {
//   localStorage.setItem('authToken', resp.data.token);
//   api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
// }

export default App;
