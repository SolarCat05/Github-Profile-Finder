import { useEffect } from "react"
import React, { useState } from "react"
import User from "./User"

export default function GithubProfileFinder(){

    const[userName,setUserName]= useState('random')
    const [userData,setUserData]= useState(null)
    const[loading,setLoading]=useState(false)

    async function fetchGithubUserData(){
        setLoading(true);
        const res=await fetch (`https://api.github.com/users/${userName}`)
        const data= await res.json();

        if(data){
            setUserData(data);
            setLoading(false);
            
        }

        console.log(data);
    }

    useEffect(()=>{
        fetchGithubUserData()
    },[])

    if(loading){
        return <h3 className="loading">Loading Data ! Please wait...</h3>
    }

    function handleSubmit() {  
        fetchGithubUserData();
    }

    return (
      <div className="GithubProfileFinder">
        <div className="container">
          <input
            type="text"
            name="search-by-username"
            placeholder="Search Github Username"
            onChange={(event) => setUserName(event.target.value)}
          />

        <button onClick={handleSubmit}>Search</button>
        </div>

        <div>{userData !== null ? <User user={userData} /> : null}</div>
      </div>
    );
}