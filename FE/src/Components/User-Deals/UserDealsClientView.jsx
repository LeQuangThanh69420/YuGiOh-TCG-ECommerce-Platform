import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Shared/Header";
import UserDealsBody from "./UserDealsBody";

function UserDealsClientView(){

    return(
        <>
            <Header />
            <UserDealsBody />
        </>
    )
}

export default UserDealsClientView