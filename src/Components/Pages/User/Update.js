import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

function Update(){
  const {userId} = useParams();

  const[user, setUser]= useState({});

  const{register,setValue, handleSubmit} = useForm();

  const navigate =useNavigate();

  async function fetchUser(){
    const result = await axios.get(`http://localhost:5000/users/${userId}`);
    setUser(result.data);
  }

  function setData(){
   
    setValue("pid", user.pid) 
    setValue("fnmae",user.fname)
    setValue("lname",user.lname) 
    setValue("address",user.address)
  }

  function saveData(data){
    axios.put(`http://localhost:5000/users/${userId}`,data);
    navigate('/user/show');                                                                                           
}
  useEffect(() => {
      fetchUser()
  },[])

  return (
    <>
      <div className='container mt-3'>
            <h1><center>Update Form</center></h1>
            <form onSubmit={handleSubmit(saveData)} className="mt-5">
                <label htmlFor='pid'><b>PERSON ID :</b></label>
                <input type='number' id='pid' className='form-control' {...register('pid')}/>
                <br></br>
                <label htmlFor='fn'><b>FIRST NAME:</b></label>
                <input type='text' id='fn' className='form-control' {...register('fname')}/>
                <br></br>
                <label htmlFor='ln'><b>LAST NAME:</b></label>
                <input type='text' id='ln' className='form-control' {...register('lname')}/>
                <br></br>
                <label htmlFor='ad'><b>ADDRESS:</b></label>
                <input type='text' id='ad' className='form-control'{...register('address')}/>
                <br></br>
               <input type='submit' value='Update User' className='btn btn-outline-danger' />
              </form>
                <button  onClick={()=>{setData()}} className='btn btn-outline-danger'>Load Values saved</button>
            
        </div>

    </>
  )
}

export default Update;