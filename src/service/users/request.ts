import { HttpStatusCode } from "axios";
import { apiTic } from "../api";
import { LoginRequest } from "./type";

const onLogin = async (data: LoginRequest): Promise<number> => {
    try {
      const response = await apiTic.post('/users/login', data);
      
      return response.status;
    } catch (err) {
      return HttpStatusCode.Unauthorized
    }
};

export { onLogin }
