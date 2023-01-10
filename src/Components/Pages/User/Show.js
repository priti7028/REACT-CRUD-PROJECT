import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function Show() {
    const[users,setUsers] = useState([]);

    async function fetchAllUsers(){
        const result = await axios.get(`http://localhost:5000/users`);
        setUsers(result.data);
    }
    useEffect(()=>{
        fetchAllUsers();
    },[]
    )

  return (
    <>
        <table className='table table-dark'>
            <thead>
            <tr>
                <th>PERSON ID</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>ADDRESS</th>
                <th>ACTION</th>
            </tr>
            </thead>
            <tbody>
                {
                    users.map(obj=>{
                        return(
                            <tr>
                                <td>{obj.pid}</td>
                                <td>{obj.fname}</td>
                                <td>{obj.lname}</td>
                                <td>{obj.address}</td>
                                <td>
                                    <NavLink to={`/user/update/${obj.id}`}><button className='btn btn-outline-warning ms-3'>UPDATE</button></NavLink>
                                    <NavLink to={`/user/delete/${obj.id}`}><button className='btn btn-outline-warning ms-3'>DELETE</button></NavLink>
                                </td>
                            </tr>

                        );
                    })
                }
            </tbody>
        </table>
    
    </>
  )
}

export default Show;