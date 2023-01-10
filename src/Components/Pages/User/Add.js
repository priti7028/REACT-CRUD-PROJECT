import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add(){
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    function saveData(data){
        axios.post('http://localhost:5000/users',data);
        navigate('/user/show')                                                                                           
    }
    return(
        <>
        <div className='container mt-3'>
            <h1><center>Person Registration Form</center></h1>
            <form onSubmit={handleSubmit(saveData)} className="nt-5">
                <label htmlFor='pid'><b>PERSON ID:</b></label>
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
               <input type='submit' value='Add User' className='btn btn-outline-danger ms-3' />
                <input type='reset' value='Reset' className='btn btn-outline-danger ms-3' />
            </form>
        </div>
    </>
     )
    }

export default Add;