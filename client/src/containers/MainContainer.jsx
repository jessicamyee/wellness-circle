import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import WellDataCreate from "../screens/WellDataCreate";
import WellDataViewEdit from "../screens/WellDataViewEdit";
import InnerCircle from "../screens/InnerCircle";
import SharedSettings from "../screens/SharedSettings";

import {
  getAllShares,
  getListOfShared,
  postShare,
} from "../services/user-share";

import {
  destroyWellnessData,
  getAllWellnessData,
  postWellnessData,
  putWellnessData,
} from "../services/wellness-data";

export default function MainContainer(props) {
  const [wellnessData, setWellnessData] = useState([]);
  const [allShares, setAllShares] = useState([]);
  const [shareList, setShareList] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchWellnessData = async () => {
      const responseData = await getAllWellnessData();
      setWellnessData(responseData);
    };
    fetchWellnessData();
  }, []);

  useEffect(() => {
    const fetchShareListData = async () => {
      const shareList = await getListOfShared();
      setShareList(shareList);
    };
    fetchShareListData();
  }, []);

  useEffect(() => {
    const fetchAllShares = async () => {
      const allShares = await getAllShares();
      setAllShares(allShares);
    };
    fetchAllShares();
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
      <Route path="/user_shares/list">
        <SharedSettings shareList={shareList} />
      </Route>
      <Route path="/user_shares">
        <InnerCircle allShares={allShares} />
      </Route>
    </Switch>
  );
}
