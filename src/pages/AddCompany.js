import React from 'react';
import { useForm } from "react-hook-form";
import Header from "./../partials/Header";
import Footer from "./../partials/Footer";

import "./css/styles.css";

let num = 0; 

const Input = ({ name, type, label, register, required }) => {
    
    num=num+1;
    let clas = "";

    if(label==="description" || label==="qualificationNeeded" || label==="role"  ){
        clas="AddJob__form-text"
        
        return(
            <div className={clas}>
                <label>{num/2}. {name}{required ? <sup>*</sup> : <sup></sup>}</label>
                <textarea type={type} required={required} {...register(label, { required })} placeholder={name} />
            </div>
        )
    }else{
        if(type==="checkbox") clas="AddJob__form-checkbox";
        if(type==="file") clas="AddJob__form-file";
        return(
            <div className={clas}>
                <label>{num/2}. {name}{required ? <sup>*</sup> : <sup></sup>}</label>
                <input accept="image/*" type={type} required={required} {...register(label, { required })} placeholder={name} />
            </div>
        )
    }
}


const AddCompany = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    
    
    return(
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}
            <Header type="dashboard" />

            {/*  Page content */}
            <div  className="AddJob__section">            
                <h3 className="AddJob__section-heading">Add Company</h3>
                <p className="AddJob__section-para"><sup >*</sup> marked are required</p>
                <main className="AddJob__container flex-grow">
                    <form className="AddJob__form" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <Input type="string" name="Company Name" label="CompanyName" register={register} required />
                            <Input type="string" name="location" label="location" register={register} required />
                            <Input type="file" name="Company Logo" label="companyLogo" register={register} required />
                            {/* <Input type="checkbox" name="Female Only ?" label="femaleOnly" register={register} /> */}
                            <Input type="text" name="Description" label="description" register={register} required />
                            {/* <Input type="textarea" name="Job Role" label="role" register={register} required /> */}
                        </div>
                        <input className="AddJob__submit" type="submit" />
                    </form> 
                </main>
            </div>
            {/*  Site footer */}
            <Footer />

        </div>
    );
} 

export default AddCompany;