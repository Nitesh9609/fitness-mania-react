import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import {connect} from 'react-redux'
import "./SignIn.css";
import { displayUser } from "../../redux/signIn/signIn.action";

const SignIn = ({sendUser,getUsers}) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [tokens, setTokens] = useState("");
  const [datas, setDatas] = useState();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleOnClick = async () => {
    await axios
      .post("http://localhost:8080/app/user/signin", user)
      .then((res) => {
        sendUser(res.data);
        if(res.data){
          navigate('/display')
        }else{
          res.send('recheck your credentials')
        }

      })
      .catch(function (error) {
        alert(error);
      });

      localStorage.setItem("user",JSON.stringify(getUsers))
    
     
    
  };

  return (
    <>
      <div className="button">
      </div>
      <div className="form">
        <h1>Login Form</h1>
        <div className="login">
          <TextField
            required
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            onChange={handleOnChange}
          />
        </div>

        <div className="login">
          <TextField
            required
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            onChange={handleOnChange}
          />
        </div>

        <Button onClick={handleOnClick} variant="contained">
          SIGN IN
        </Button>
       
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch =>({
  sendUser: userList => dispatch(displayUser(userList))
})

const mapStateToProps = state =>({
  getUsers: state.signIn.users
})

export default connect(mapStateToProps,mapDispatchToProps) (SignIn);





// for auth-token

// axios.get('https://api.github.com/user', {
//   headers: {
//     'Authorization': `token ${access_token}`
//   }
// })
// .then((res) => {
//   console.log(res.data)
// })
// .catch((error) => {
//   console.error(error)
// })
