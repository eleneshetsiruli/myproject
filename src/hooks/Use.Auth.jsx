import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useAuth = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);

  async function login(email, password) {
    let res;

    try {
      res = await axios({
        method: "post",
        url: "https://digitalinstitute-amazon.azurewebsites.net/api/User/LogIn",
        data: {
          email,
          password,
        },
      });
    } catch (e) {
      console.log(e);
    }
    upDateToken(res.data.jwt);

    navigate("/products");
  }

  async function signup({ userName, password, email }) {
    let res;
    try {
      res = await axios({
        method: "post",
        url: "https://digitalinstitute-amazon.azurewebsites.net/api/user/registerUser",
        data: {
          userName,
          password,
          email,
        },
      });

      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  }

  function logout() {
    return setAuth({ token: null });
  }

  function upDateToken(token) {
    setAuth({ token: token });
  }

  const tokenParsed = parseJwt(auth.token);

  return {
    auth: {
      ...auth,
      isAuthed: !!auth.token,
      tokenParsed: {
        ...tokenParsed,
        userName: tokenParsed?.unique_name,
        id: tokenParsed?.nameid,
      },
    },
    login,
    logout,
    signup,
    upDateToken,
  };
};

export default useAuth;

function parseJwt(token) {
  if (!token) return null;
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
