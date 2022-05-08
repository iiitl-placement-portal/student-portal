import React from 'react';
import { useForm } from 'react-hook-form';

const AnnouncementForm = ( {button,type}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  if(type==="announcement"){
    return (
      <form className='form__ui' onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register("Announcement Message", {required: true})} placeholder={"Type your Message Here"}/>
  
        <input type="submit" className='formSend' value={button}/>
      </form>
    );
  }else{
    return (
      <form className='form__ui' onSubmit={handleSubmit(onSubmit)}>
        <input className='form__ui-send' type="email" placeholder="recieverMail" {...register("recieverMail", {required: true})} />
        <textarea {...register("Announcement Message", {required: true})} />

        <input type="submit" className='formSend' value={button}/>
      </form>
    );
  }
  
}
export default AnnouncementForm;
