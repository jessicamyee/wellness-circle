import api from "./api-config";

export const getAllWellnessData = async () => {
  const resp = await api.get("/wellness_data");
  return resp.data;
};

export const postWellnessData = async (wellnessInput) => {
  const resp = await api.post('/wellness_data', { wellness_datum: wellnessInput });
  return resp.data;
}

export const putWellnessData = async (id, wellnessInput) => {
  const resp = await api.put(`/wellness_data/${id}`, { wellnessData: wellnessInput })
  return resp.data
}

export const destroyWellnessData = async (id) => {
  const resp = await api.delete(`/wellness_data/${id}`);
  return resp;
}