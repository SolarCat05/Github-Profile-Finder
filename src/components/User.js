import React from "react";

export default function User({user}){
    const{avatar_url,followers,following,public_repos,html_url,name,login,created_at}=user;

    const joinedDate=new Date(created_at);

    return (
      <div className="User">
        <div>
          <img src={avatar_url} className="avatar" alt="User" />
        </div>
        <div className="Usertitle">
          <a href={html_url}>{login || name}</a>
          &nbsp;Joined on{" "}
          {`${joinedDate.getDate()} ${joinedDate.toLocaleString("en-us", {
            month: "short",
          })} ${joinedDate.getFullYear()}`}
        </div>
        <div className="Userdata">
          <p>Public Repos:{public_repos}</p>
          <p>Followers:{followers}</p>
          <p>Following:{following}</p>
        </div>
      </div>
    );
}