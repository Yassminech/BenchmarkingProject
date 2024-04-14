import { authActions } from "../slices/authSlice";


// Login User
export function loginUser(user) {
    return async (dispatch) => {
      try {
        const { data } = await request.post("/api/auth/login",user);
        dispatch(authActions.login(data));
        localStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        //toast.error(error.response.data.message);
      }
    }
}