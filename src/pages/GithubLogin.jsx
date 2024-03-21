import React from "react";
import { useEffect, useState } from "react";

function GithubLogin() {
  const [rerender, setRerender] = useState(false);
  const [UserData, setUserData] = useState({});

  const CLIENT_ID = "7c094a1449a6640bbc50";

  async function getUserData() {
    await fetch("http://localhost:2000/getUserData", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        setUserData(data);
      });
  }

  function loginWithGithub() {
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID
    );
  }

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");
    console.log(codeParam);

    if (codeParam && localStorage.getItem("accessToken") === null) {
      async function getAccesToken() {
        await fetch("http://localhost:2000/getAccessToken?code=" + codeParam, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            if (data.access_token) {
              localStorage.setItem("accessToken", data.access_token);
              setRerender(!rerender);
            }
          });
      }
      getAccesToken();
    }
  }, []);

  return (
    <div>
      {localStorage.getItem("accessToken") ? (
        <>
          <h3>login Suceessful</h3>
          <button
            onClick={() => {
              localStorage.removeItem("accessToken");
              setRerender(!rerender);
            }}
          >
            Logout
          </button>
          <h3>UserData</h3>
          <button onClick={getUserData}>Get Data</button>

          {Object.keys(UserData).length !== 0 ? (
            <>
              <h3>hello {UserData.name}</h3>
              <img src={UserData.avatar_url} alt="" width={100} height={100} />
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          <h3>Login with github</h3>
          <br />
          <button onClick={loginWithGithub}>Login with Github</button>
        </>
      )}
    </div>
  );
}

export default GithubLogin;
