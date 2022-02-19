import axios from "./api";

export const getAnalyticss = (params: any) =>
  axios.get("/customer", { params }).then((res) => res.data);

export const getAnalytics = (_id: string | undefined) =>
  axios.get(`/customer/${_id}`).then((res) => res.data);

export const createAnalytics = (body: any) =>
  axios.post("/customer", body).then((res) => res.data);

export const updateAnalytics = (_id: string | undefined, body: any) =>
  axios.put(`/customer/${_id}`, body).then((res) => res.data);

export const toggleAnalytics = (_id: string) =>
  axios.put(`/customer/toggle/${_id}`).then((res) => res.data);

export const deleteAnalytics = (_id: string) =>
  axios.delete(`/customer/${_id}`).then((res) => res.data);
