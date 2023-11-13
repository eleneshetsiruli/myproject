import React, { useState } from "react";
import useAuth from "../../hooks/Use.Auth";
import axios from "axios";

export const Profile = () => {
  const { auth, upDateToken } = useAuth();
  const [info, setinfo] = useState({
    ...auth.tokenParsed,
    newPassword: "",
    repeatPassword: "",
  });

  async function handleSubmit() {
    if (info.newPassword !== info.repeatPassword) return;

    try {
      const res = await axios({
        method: "put",
        url: "https://digitalinstitute-amazon.azurewebsites.net/api/User/updateuserdata",
        data: {
          id: info.id,
          email: info.email,
          newPassword: info.newPassword,
          userName: info.userName,
        },
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      upDateToken(res.data.jwt);
      alert("successfully completed");
      setinfo({ ...info, newPassword: "", repeatPassword: "" });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="con">
      <h3>edit your profile</h3>
      <div className="editProf">
        <input
          type="text"
          placeholder="username"
          value={info.userName}
          onChange={(e) => setinfo({ ...info, userName: e.target.value })}
        />
        <input
          type="email"
          placeholder="email"
          value={info.email}
          onChange={(e) => setinfo({ ...info, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="new password"
          value={info.newPassword}
          onChange={(e) => setinfo({ ...info, newPassword: e.target.value })}
        />
        <input
          type="password"
          placeholder="repeat password"
          value={info.repeatPassword}
          onChange={(e) => setinfo({ ...info, repeatPassword: e.target.value })}
        />
        <button onClick={handleSubmit} className="okbtn">
          ok
        </button>
      </div>
    </div>
  );
};
