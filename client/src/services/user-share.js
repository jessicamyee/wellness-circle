import api from "./api-config";

export const getAllShares = async () => {
  const resp = await api.get("/user_share");
  return resp.data;
};

export const postShare = async (shareData) => {
  const resp = await api.post('/user_share', { share: shareData });
  return resp.data;
}

export const getListOfShared = async () => {
  const resp = await api.get("/user_share/list");
  return resp.data;
};