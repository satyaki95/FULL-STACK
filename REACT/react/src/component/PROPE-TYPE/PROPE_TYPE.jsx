import React, { useState } from "react";
import USER from "./USER";

const PROPE_TYPE = () => {
  const [userName, setUserName] = useState("Satyaki");
  const [userId, setUserId] = useState();
  const [user, setUser] = useState({
    id: 123456789,
    name: "Satyaki Saha",
  });
  return (
    <>
      <USER userName={userName} userId={userId} user={user} />
    </>
  );
};

export default PROPE_TYPE;
