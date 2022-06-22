import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Link } from "react-router-dom"
function Registration(){
    const { formState: { errors } } = useForm();
  //const onSubmit = (data) => console.log(data);

const [namee, setnamee]=useState('');
  const [surname, setsurname]=useState('');

  const [employeenum, setemployeenum]=useState('');
  const [mail, setmail]=useState('');
  const [pass, setpass]=useState('');
  const [phone, setphone]=useState('');
  const [img, setimg]=useState('');
  const[login, setLogin]=useState(true)

    const uerRegistration=()=>{
    let worker={
    namee: namee,
    surname: surname,
    employeenum: employeenum,
    mail: mail,
    pass: pass,
    phone: phone,
    img: img,
    date: new Date
  };
  if(namee == ''){
    alert("All Fields are required");

  }else if(surname==''){
    alert("All Fields are required");
  }
  else if(employeenum==''){
    alert("All Fields are required");
  }else if(mail==''){
    alert("All Fields are required");
  }else if(pass==''){
    alert("All Fields are required");
  }else if(phone==''){
    alert("All Fields are required");
  }else if(img==''){
    alert("All Fields are required");
  }
  else {
    let storedEmpolyeeDetails =new Array();
    let storedEmployeeUsers=JSON.parse(localStorage.getItem("user"));
    if(storedEmployeeUsers){
        storedEmpolyeeDetails=storedEmployeeUsers;
        storedEmpolyeeDetails.push(worker);

    }
    else{
      storedEmpolyeeDetails.push(worker);
      console.log('saved in local storage');
       setLogin(!login)
  }
  localStorage.setItem('user',JSON.stringify(storedEmpolyeeDetails))
}
    }
    function handleSubmit(e){
        e.preventDefault();
        alert('account created, click signin bellow to login')
        setLogin(!login)
    }
    return(
        <div>
             <p className="title">Registration Form
      
      </p>

      <form  className="App" onSubmit={handleSubmit}  >
      <input type="text" className="form-control" placeholder="Enter Name" name="name" value={namee} onChange={(e)=>{setnamee(e.target.value)}}/>
     
      <input type="text" className="form-control" placeholder="Enter Surname"  value={surname} onChange={(e)=>{setsurname(e.target.value)}}/>
     
      <input type="number" className="form-control"  placeholder="Enter Employee Number"  value={employeenum} onChange={(e)=>{setemployeenum(e.target.value)}}/>
     
      <input type="email" className="form-control" placeholder="Enter Email Address" value={mail} onChange={(e)=>{setmail(e.target.value)}}/>
      
      <input type="password" className="form-control" placeholder="Enter Password" value={pass} onChange={(e)=>{setpass(e.target.value)}}/>
     
      <input type="tel" className="form-control" placeholder="Enter Phone Number"  value={phone} onChange={(e)=>{setphone(e.target.value)}}/>
      
      <input type="file" className="form-control" placeholder="Select Image" value={img} onChange={(e)=>{setimg(e.target.value)}}/>

        <input type={"submit"} 
         style={{ backgroundColor: "#a1eafb" }} onClick={uerRegistration}
          
          />
         <p>Already have an account click <Link to='/'> Signin
          </Link> to login</p> 
         
      </form>
        </div>

    );
}
export default Registration  
