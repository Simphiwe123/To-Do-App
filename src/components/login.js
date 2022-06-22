// inside src/Login.jsx
//import { useHistory } from "react-router-dom";
import React, { useState}from "react";
//import { useForm } from "react-hook-form";
import "./App.css";
import { Link } from "react-router-dom"

function Login() {
  const [mail,setEmaillog]=useState('');
    const [pass,setPasswordlog]=useState('');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var pwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    //let history = useHistory();
    const getInfo=(e)=>{
        e.preventDefault();
        let getD={
            mail:mail,
            pass:pass
        };
        if(getD.mail===''){
            alert('email cant be empty');
        }
        else if(!filter.test(mail)){
            alert('incorrect email format');
        }
        else if(getD.pass===''){
            alert('password cant be empty');
        }
        else if(!pwd.test(pass)){
            alert('incorrect password');
        }
        else{
            let storedUsers=JSON.parse(localStorage.getItem('user'));
            let userFound=false;
            for(let user of storedUsers){
                if(mail===user.mail && pass ===user.pass){
                    alert("correct login info yo now logged in");
                    userFound=true
                    window.location='/';
                   
                }
            }
            if (!userFound){
                alert('password does not match')
            }
        }
      }
  return (
    <>
      <p className="title">Login Form</p>

      <form className="App" >
        <input type="email"  placeholder="Enter Email" id="maill" value={mail} onChange={(e)=>{setEmaillog(e.target.value)}}/>
        
      
        <input type="password"  placeholder="Enter Password" id="Passwordl" value={pass} onChange={(e)=>{setPasswordlog(e.target.value)}}/>
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} onClick={getInfo} />
        <p>Don't have an account click<Link to='/Registration'> here
          </Link> to register</p>
      </form>
    </>
  );
}
export default Login;