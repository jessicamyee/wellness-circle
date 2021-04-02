import api from "./api-config";

export const getAllShares = async () => {
  const resp = await api.get("/user_shares");
  return resp.data;
};

export const postShare = async (shareData) => {
  const resp = await api.post('/user_shares', shareData );
  return resp.data; 
}

export const getListOfShared = async () => {
  const resp = await api.get("/user_shares/list");
  return resp.data;
};