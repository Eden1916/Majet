import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import {useNavigate} from "react-router-dom";
import { getMe } from "../api/auth";

function Dashboard() {
  const [user, setUser] = useState(null);
  const {theme} = useTheme();
  const navigate = useNavigate()

  useEffect(() => {
    getMe()
      .then(setUser)
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <button className={`block w-full max-w-20 my-5 mx-auto rounded font-bold text-xl cursor-pointer text-gray-100 ${theme === "dark" ? "bg-green-700 active:bg-green-600 hover:text-black" : "bg-green-600 hover:bg-green-700 active:bg-green-500"}`}
  onClick={() => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }}
>
  Logout
</button>

      <h2>Dashboard</h2>
      <p>Welcome, {user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}

export default Dashboard;
