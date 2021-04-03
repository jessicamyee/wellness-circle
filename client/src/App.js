// package imports
import api from './services/api-config';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory} from 'react-router-dom';

// import styling
import './App.css';
import MainContainer from './containers/MainContainer';

// component imports
import Layout from './layouts/Layout';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

// function imports
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import Nav from './components/Nav/Nav';

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

  SetAuthTokenIfMissing();
  
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

// To reset the token when refresh
function SetAuthTokenIfMissing() {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
  }
}

export default App;
