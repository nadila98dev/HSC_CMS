import axios from "axios";
import { config } from "../config";

export async function fetchLogin(url, payload) {
  try {
    const res = await axios.post(`${config.api_host_dev}${url}`, payload);
    return res;
  } catch (err) {
    return err;
  }
}

export async function getData(url, params) {
  try {
    const token = localStorage.getItem("token") ?? {};
    const res = await axios.get(`${config.api_host_dev}${url}`, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (err) {
    return err;
  }
}

export async function postData(url, payload, formData) {
  try {
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : {};
    const res = await axios.post(`${config.api_host_dev}${url}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (err) {
    return err;
  }
}

export async function putData(url, payload) {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.put(`${config.api_host_dev}${url}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return res;
  } catch (err) {
    return err;
  }
}

export async function deleteData(url) {
  try {
    const token  = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : {};

    const res = await axios.delete(`${config.api_host_dev}${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  } catch (err) {
    return err
  }
}
