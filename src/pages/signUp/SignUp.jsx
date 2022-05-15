import React, {useState} from 'react'
import axios from 'axios'
import './SignUp.css'
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useNavigate} from 'react-router-dom';

const SignUp = () => {
  
    const navigate = useNavigate()
   
    const [user,setUser] = useState({})

    const handleOnChange = (event) =>{
        const {name,value} = event.target
        setUser({...user,[name]:value})
       
    }

    const handleOnClick= async ()  =>{
        axios.post('http://localhost:8080/app/user/register',user)
        .then( (response) => {
            console.log(response.data);
            if(response.data){
                return alert('User Created Successfully')
            }
            else{
                return alert('some error')
            }
        }
        
        )
        .catch(function (error) {
            console.log(error);
        });


        // const result = await axios.post('http://localhost:8080/app/user/register',user)
        // if(result){
        //     alert("SignUp Sucessfull")
        // }
        // localStorage.setItem("user", JSON.stringify(result.data))
    

    }



  return (
    <>
        <div className='form'>
            <h1>SignUp Form</h1>

            <div className='signup'>
            <TextField 
                        required
                        name="name"
                        type="text" 
                        label="Name" 
                        variant="outlined" 
                        onChange={handleOnChange} />
            </div>
            
            <div className='signup'>
            <TextField 
                        required
                        name="email"
                        type="email" 
                        label="Email" 
                        variant="outlined" 
                        onChange={handleOnChange} />
            </div>
            
            <div className='signup'>
            <TextField 
                        required
                        name="address"
                        type="text" 
                        label="Address" 
                        variant="outlined" 
                        onChange={handleOnChange} />
            </div>
            
            
            <div className='signup'>
            <TextField 
                            required
                            name="password" 
                            type="password"
                            label="Password" 
                            variant="outlined" 
                            onChange={handleOnChange} />
            </div>
            

            <div className='signup'>
            <TextField 
                            required
                            name="confirmPassword" 
                            type="password"
                            label="Confirm Password" 
                            variant="outlined" 
                            onChange={handleOnChange} />

            </div>
            
            <Button onClick={handleOnClick} variant="contained">SIGN UP</Button>
            
        </div>
    </>
  )
   
}

export default SignUp