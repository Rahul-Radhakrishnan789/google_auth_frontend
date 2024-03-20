import React from 'react'
import { useEffect } from 'react'

function GithubLogin() {

    const CLIENT_ID = "7c094a1449a6640bbc50"

    function loginWithGithub() {
       window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID)
    }

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const codeParam = urlParams.get("code");
        console.log(codeParam)
    },[])

  return (
    <div>
        <button onClick={loginWithGithub}>
            Login with Github
        </button>
    </div>
  )
}

export default GithubLogin