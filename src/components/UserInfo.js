import React from "react";
import { setName,setEmail } from "../redux/action/formaction";
import {useDispatch, useSelector} from "react-redux";


const UserInfo=()=>{
    const dispatch=useDispatch();
    const userName=useSelector(state=>state.name);
    const userEmail=useSelector(state=>state.email);



    return (
        <div>
            <h1>User Information</h1>
            <div className="form">
                <label>Name:</label>
                <input type="text" id="name" onChange={(e)=>dispatch(setName(e.target.value))}/>
                <label>Email:</label>
                <input type="email" id="email" onChange={(e)=>dispatch(setEmail(e.target.value))}/>

            </div>
            <div className="output">
                <p>Current values in store:</p>
                <p>Name - {userName}</p>
                <p>Email - {userEmail}</p>
            </div>
        </div>
    )




}
export default UserInfo;