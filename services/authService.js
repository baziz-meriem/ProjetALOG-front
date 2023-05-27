import http from "./httpService";
import { apiUrl } from "../config/config";
const apiEndpoint = apiUrl.url + "/auth";


// login a user
export async function login(email, password,role) {
  return await http.post(`${apiEndpoint}/${role}/login`, { email, password });

}

export default {
  login
 
};
