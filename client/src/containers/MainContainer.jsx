import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import WellDataCreate from "../screens/WellDataCreate";
import WellDataViewEdit from "../screens/WellDataViewEdit";
import InnerCircle from "../screens/InnerCircle"
import SharedSettings from "../screens/SharedSettings"


import {
  destroyWellnessData,
  getAllWellnessData,
  postWellnessData,
  putWellnessData,
} from "../services/wellness-data";

export default function MainContainer(props) {
  const [wellnessData, setWellnessData] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchWellnessData = async () => {
      const responseData = await getAllWellnessData();
      setWellnessData(responseData);
    };
    fetchWellnessData();
  }, []);

  const handleCreate = async (wellnessInput) => {
    const newWellnessData = await postWellnessData(wellnessInput);
    setWellnessData((prevState) => [...prevState, newWellnessData]);
    history.push("/wellness_data");
  };

  const handleUpdate = async (id, wellnessInput) => {
    const updatedWellnessData = await putWellnessData(id, wellnessInput);
    setWellnessData((prevState) =>
      prevState.map((wellnessDatum) => {
        return wellnessDatum.id === Number(id)
          ? updatedWellnessData
          : wellnessDatum;
      })
    );
    history.push("/wellness_data");
  };

  const handleDelete = async (id) => {
    await destroyWellnessData(id);
    setWellnessData((prevState) =>
      prevState.filter((wellnessDatum) => wellnessDatum.id !== id)
    );
  };

  return (
    <Switch>
      <Route path="/wellness_data/new">
        <WellDataCreate handleCreate={handleCreate} />
      </Route>
      <Route path="/wellness_data/:id/edit">
        <WellDataViewEdit
          wellnessData={wellnessData}
          handleUpdate={handleUpdate}
        />
      </Route>
      <Route path="/wellness_data">
        <Dashboard
          wellnessData={wellnessData}
          handleDelete={handleDelete}
          currentUser={currentUser}
        />
      </Route>
      <Route path="/user_share/list">
        <SharedSettings />
      </Route>
      <Route path="/user_share">
        <InnerCircle />
      </Route>
    </Switch>
  );
}
