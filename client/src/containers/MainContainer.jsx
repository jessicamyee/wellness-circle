import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import WellDataCreate from "../screens/WellDataCreate";

import { getAllWellnessData, postWellnessData } from "../services/wellness-data";





export default function MainContainer(props) {
  const [wellnessData, setWellnessData] = useState([]);
  const history = useHistory();
  // const { currentUser } = props;

  useEffect(() => {
    const fetchWellnessData = async () => {
      const responseData = await getAllWellnessData();
      setWellnessData(responseData);
    };
    fetchWellnessData();
  }, []);

  const handleCreate = async (wellnessInput) => {
    const newWellnessData = await postWellnessData(wellnessInput);
    setWellnessData(prevState => [...prevState, newWellnessData]);
    history.push('/wellness_data');
  }

  return (
    <Switch>
      <Route path="/wellness_data/new">
        <WellDataCreate handleCreate={handleCreate}/>
      </Route>
      <Route path="/wellness_data">
        <Dashboard wellnessData={wellnessData} />
      </Route>
      
    </Switch>
  );
}
