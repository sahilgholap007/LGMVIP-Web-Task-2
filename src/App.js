import "./App.css";
import React from "react";
import Card from "./Components/Card";
import { useState } from "react";
import axios from "axios";
import RingLoader from "react-spinners/RingLoader";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetUsers = async () => {
    await axios.get("https://reqres.in/api/users?page=1").then((res) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1200);
      setUsers(res.data.data);
    });
  };

  const card = users.map((user) => {
    return (
      <Card
        key={user.id}
        user={user}
        firstName={user.first_name}
        lastName={user.last_name}
        email={user.email}
        avatar={user.avatar}
      />
    );
  });

  return (
    <div className="App">
      <nav className="navbar">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="logo"
        />
        <button className="btn" onClick={handleGetUsers}>
          GET USERS
        </button>
      </nav>
      <div className="cards-container">
        {loading ? (
          <RingLoader	
            color="#61DBFB"
            size={100}
            className="loader"
          />
        ) : (
          card
        )}
      </div>
    </div>
  );
}

export default App;
