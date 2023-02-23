import axios from "axios";

import configApp from "../config";

let REACT_APP_API_URL = configApp.REACT_APP_API_URL;

export const getRequest = async (params) => {
  let url = REACT_APP_API_URL;
  return await axios.get(url, {
    params: params,
    timeout: 20000,
  });
};
