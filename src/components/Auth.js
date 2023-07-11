import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = ({ children }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUserData(JSON.parse(user));
    } else {
      navigate("/login");
    }
  }, []);

  return <div>{userData && children}</div>;
};
export default Auth;
