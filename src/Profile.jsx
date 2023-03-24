import React, {useState} from "react";
import "./Profile.css"
function Profile(){
    
    const [userName, setUserName] = useState("")
    const [userData, setUserData] = useState({})

    function onChangeHandle(event){
     setUserName(event.target.value)
    }

    function fetchData(event){
        event.preventDefault()
        fetch(`https://api.github.com/users/${userName}`)
       .then((response)=>{
        return response.json()
       })
       .then((data)=>{
         let user = data
         setUserData(user)
       })
        
    }
    return(
        <div>
            <h1 className="title">Github User</h1>
            <form className="form" action="">
            <input className="user-input" placeholder="Enter user name" type="text" value={userName} onChange = {onChangeHandle} />
               <button className="search-btn" onClick={fetchData}>Search User</button>
            </form>
               
               <div className="user-profile">
               <img className="user-img" src= {userData.avatar_url} alt="" />
               <div className="user-details">
               <h1 className="user-heading">{userData.name}</h1>
               <p><b>Bio: </b>{userData.bio}</p>
               <p><b>Location:</b> {userData.location}</p>
               <p><b>Followers:</b> {userData.followers}</p>
               <p><b>Following:</b> {userData.following}</p>
               <p><b>Profile:</b> {userData.url}</p>
               <p><b>Ropositories:</b>{userData.repos_url}</p>
               </div>
               
               </div>
               
        </div>
        
    )
}
export default Profile