import "../css/form.css";
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


export default function Form(props){
    const [userForm,setuserForm] = useState({department:'',doctor:'',name:'',phone:'',date:'',time:'',comment:''});
    const [validity,setValidity]= useState(false);
    const [warning,setwarning] = useState({department:'',doctor:'',name:'',phone:'',date:'',time:'',comment:''});

    function validate(){
        if(userForm.department>0){
            return false ;

        }
        return true
    }
    const formRef = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bh7a2d7', 'template_ui7l3hq', formRef.current, 'sPg4K0KDKki4zuwY1')
        .then((result) => {
            console.log(result.text);
            formRef.current.reset();
            props.onFormSubmit();
        }, (error) => {
            console.log(error.text);
        });
    }


    function onDepartmentChange(e){
       userForm.name = e.target.value ;
       if(e.target.value.length<3){
            warning.department = "this is too short"
       }
    }
    function onDoctorChange(e){
       userForm.doctor = e.target.value ;
    }
    function onNameChange(e){
       userForm.name = e.target.value ;
    }
    function onNumberChange(e){
       userForm.phone = e.target.value ;
    }
    function onDateChange(e){
       userForm.date = e.target.value ;
    }
    function onTimeChange(e){
       userForm.time = e.target.value ;
    }
    function onCommentChange(e){
       userForm.comment = e.target.value ;
    }

    console.log(validate())
    return (
    <form ref={formRef} className="contact-form" onSubmit={sendEmail}  >
        {props.title && <div className="subtitle" >We are here for you</div>}
        {props.title && <div className="title" >BOOK APPOINTMENT</div>}
        <div className="grid">
            <div className="department input-container">
                <input type="text" placeholder="Department" onChange={onDepartmentChange} name="department_name" />
                <span>{warning.department}</span>
            </div>
            <div className="doctor input-container">
                <input type="text" placeholder="Doctor" onChange={onDoctorChange} name="doctor_name" />
                <span>{warning.doctor}</span>
            </div>
            <div className="name input-container">
                <input type="text" placeholder="Full Name" onChange={onNameChange} name="user_name" />
                <span>{warning.name}</span>
            </div>
            <div className="phone input-container">
                <input type="number"  id="" placeholder="Phone" onChange={onNumberChange} name="phone_number" />
                <span>{warning.phone}</span>
            </div>
            <div className="date input-container">
                <input type="date" placeholder="Date" onChange={onDateChange} name="date" />
                <span>{warning.date}</span>
            </div>
            <div className="time input-container">
                <input type="text" placeholder="Time" onChange={onTimeChange} name="time" />
                <span>{warning.time}</span>
            </div>
            <div className="comments input-container">
                <textarea id="" cols="30" rows="10" placeholder="Special Request" onChange={onCommentChange} name="special_request" ></textarea>
                <span>{warning.comment} </span>
            </div>
            <div className="submit">
                <button className="form-submit" disabled={validity} type="submit" >Book</button>
            </div>
        </div>
        <div className="message"></div>
    </form>
    );
}