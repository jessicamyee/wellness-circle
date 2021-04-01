import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Dashboard from '../screens/Dashboard';


import { getAllWellnessData } from '../services/wellness-data';


export default function MainContainer(props) {
  const [wellnessData, setWellnessData] = useState([]);
  // const history = useHistory();
  // const { currentUser } = props;

  useEffect(() => {
    const fetchWellnessData = async () => {
      const responseData = await getAllWellnessData();
      setWellnessData(responseData);
    }
    fetchWellnessData();
  }, [])


  return (
    <Switch>
      <Route path='/wellness_data'>
        <Dashboard
          wellnessData={wellnessData}
        />
      </Route>
    </Switch>
  )
}