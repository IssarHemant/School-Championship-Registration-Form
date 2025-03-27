import React, { useContext } from 'react'
import './Form.css'
import { useForm } from "react-hook-form";
import {ThemeContext} from "./App"


const Form = () => {
     const {theme,setTheme}=useContext(ThemeContext);

    const { register, handleSubmit, watch, formState: { errors,isSubmitting },reset } = useForm();

    async function onSubmit(data){
      await new Promise((resolve)=>setTimeout(resolve,5000))
      alert("Submitted Successfully!")
        console.log("Submitted successfully",data)
        reset(); 
    }
    function handleClick(){
      if(theme==="light"){
        setTheme("dark")
        document.body.classList.add("dark-theme");
      }
      else{
        setTheme("light")
        document.body.classList.remove("dark-theme");
      }
    }
  return (
    <>
    <button className="theme-toggle" onClick={handleClick}>
    {theme === "light" ? "Dark Mode" : "Light Mode"}
  </button>
    <form className="school-form" onSubmit={handleSubmit(onSubmit)} style={{backgroundColor:theme==="light"?"#9055ff":"black"}}>
        <div className="heading">
      <h2>School Championship Registration Form</h2></div>
      <div className="school-name-field">
        <label>School Name:</label>
        <input className="school-name" type="text" placeholder="Enter your school name" {...register("schoolName",{required:true,minLength:{value:3,message:"Min. length should be 3"},maxLength:{value:25,message:"Max. length should be 25"}})}/>
        {errors.schoolName && <p>{errors.schoolName.message}</p>}
      </div>
      <div className="schooler-name-field">
        <label>Schooler Name:</label>
        <div className="schooler-name-box">
        <input className="schooler-first-name" type="text" placeholder="First name" {...register("firstschoolerName",{required:true,minLength:{value:3,message:"Min. length should be 3"},maxLength:{value:10,message:"Max. length should be 10"}})} />
        {errors.firstschoolerName&&<p>{errors.firstschoolerName.message}</p>}
        <input className="schooler-last-name" type="text" placeholder="Last name" {...register("lastschoolerName",{required:true,minLength:{value:3,message:"Min. length should be 3"},maxLength:{value:10,message:"Max. length should be 10"}})}/>
        {errors.lastschoolerName&&<p>{errors.lastschoolerName.message}</p>}
      </div>
      </div>
      <div className="parent-name-field">
        <label>Parent Name:</label>
        <div className="parent-name-box">
        <input className="parent-first-name" type="text" placeholder="First name" {...register("parentfirstName",{required:true,minLength:{value:3,message:"Min. length should be 3"},maxLength:{value:10,message:"Max. length should be 10"}})}/>
        {errors.parentfirstName&&<p>{errors.parentfirstName.message}</p>}
        <input className="parent-last-name" type="text" placeholder="Last name" {...register("parentlastName",{required:true,minLength:{value:3,message:"Min. length should be 3"},maxLength:{value:10,message:"Max. length should be 10"}})}/>
        {errors.parentlastName&&<p>{errors.parentlastName.message}</p>}
      </div>
      </div>
      <div className="phone-number-field">
        <label>Phone Number:</label>
        <input className="phone-number" type="tel" placeholder="+91 ### ### ####" {...register("parentPhone",{required:true,pattern:{value: /^[6-9]\d{9}$/,message: "Enter a valid 10-digit phone number"} })}/>
        {errors.parentPhone && <p className="error">{errors.parentPhone.message}</p>}
      </div>
      <div className="parent-email-field">
        <label>Parent Email:</label>
        <input className="parent-email" type="email" placeholder="Enter your email" {...register("parentEmail",{required:true,pattern:{value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,message:"Email format is invalid"}})}/>
        {errors.parentEmail && <p className="error">{errors.parentEmail.message}</p>}
      </div>
      <div className="preferred-sport-field">
        <label>Preferred Sport:</label>
        <input className="preferred-sport" type="text" placeholder="Enter your preferred sport" {...register("parentSport",{required:true,minLength:{value:3,message:"Min. length should be 3"},maxLength:{value:15,message:"Max. length should be 15"}})}/>
        {errors.parentSport&&<p>{errors.parentSport.message}</p>}
      </div>
      <div className="button-box">
        <input className="reset" type="reset"/>
        <input className="submit" type="submit" disabled={isSubmitting} value={isSubmitting?"Submitting":"Submit"}/>
      </div>
      </form>
      </>
  )
}

export default Form
