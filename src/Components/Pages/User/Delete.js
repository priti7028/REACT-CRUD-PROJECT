import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';

function Delete() {
    const {userId} = useParams();

    const navigate = useNavigate();

    const [user, setUser] = useState({});

    async function fetchUser(){
        const  result = await axios.get(`http://localhost:5000/users/${userId}`);
        setUser(result.data);
    }
    function DeleteUser(){
        axios.delete(`http://localhost:5000/users/${userId}`);
        navigate('/user/show');
    }
    
    
    useEffect(()=>{
        fetchUser()
    },[])
    return (
    <>
    <div className='container'>
        <center><h1><u>DELETE CONFIRMATION PAGE</u></h1></center>
        <form onSubmit={()=> DeleteUser()} className='mt-5'>
            <center>
                <p>DO YOU REALLY WANT TO DELETE<span style={{color:"pink"}}>{user.pid} {user.fname} {user.lname} {user.address}</span>RECORD?</p>
            </center>
            <input type='submit' value='YES' className='btn btn-outline-warning ms-3'/>
            <NavLink to='/user/show'><button className='btn btn-outline-warning ms-3'>NO</button></NavLink>
        </form>
    </div>
    </>
    )
}

export default Delete;