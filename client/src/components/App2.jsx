import React, { useState, useEffect } from "react";
import Header from "./Header";

export default function Home(props) {
  const [user, setUser] = useState({});
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then((responseJson) => {
        setAuthenticated(true);
        setUser(responseJson.user);
      })
      .catch((e) => {
        setAuthenticated(false);
        setError("Failed to authenticate user");
      });
  }, []); //equivalent of componentDidMmount lifecycle method

  const logout = () => {
    //   logout function
    setUser({});
    alert("user logged out");
    props.history.push("/");
  };
const handleNotAuthenticated = () => {
  setAuthenticated(false)
}
  return (
    <div className="App-header">
       <Header
          authenticated={authenticated}
          handleNotAuthenticated={handleNotAuthenticated}
        />
        <div>
          {!authenticated ? (
            <h1>Welcome!</h1>
          ) : (
            <div>
              <h1>You have login succcessfully!</h1>
              <h2>Welcome {this.state.user.name}!</h2>
            </div>
          )}
        </div>
    </div>
  );
}
