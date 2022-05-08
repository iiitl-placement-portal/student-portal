import React, {useState} from "react";
import { useForm  } from "react-hook-form";
import Footer from "./components/Footer";



const Queries = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    alert("Query Submitted");
  }
  console.log(errors);

  return (
    <div className="flex flex-col overflow-hidden">
      {/*  Page content */}
      <div className="query__section">
        <div className="query__section-heading">
          <h3 >Student Queries</h3>
        </div>
        <main className="query__container ">
          
          <div className="query__card"> 
            <form onSubmit={handleSubmit(onSubmit)}>
              <h6>Ques. Are placements Online or offline ?</h6>
              <h5>Asked by : EDT</h5>
              <div className="query__card-details">
                <textarea {...register("Query", {})}    placeholder="type your answer...." />

                <input className="query_submit" type="submit"  value={"Reply"} />
              </div>
            </form> 
          </div>
          
          <div className="query__card"> 
            <form onSubmit={handleSubmit(onSubmit)}>
              <h6>Ques. Are placements Online or offline ?</h6>
              <h5>Asked by : EDT</h5>
              <div className="query__card-details">
                <textarea {...register("Query", {})}    placeholder="type your answer...." />

                <input className="query_submit" type="submit"  value={"Reply"} />
              </div>
            </form> 
          </div>

          <div className="query__card"> 
            <form onSubmit={handleSubmit(onSubmit)}>
              <h6>Ques.  Are placements Online or offlineAre placements Online or offlineAre placements Online or offline Are placements Online or offline ?</h6>
              <h5>Asked by : EDT</h5>
              <div className="query__card-details">
                <textarea {...register("Query", {})}    placeholder="type your answer...." />

                <input className="query_submit" type="submit"  value={"Reply"} />
              </div>
            </form> 
          </div>
        </main>
      </div>

      <div className="query__section">
        <div className="query__section-heading">
          <h3 >Answered Student Queries</h3>
        </div>
        <main className="query__container ">
          
          <div className="query__card"> 
            <form onSubmit={handleSubmit(onSubmit)}>
              <h6>Ques. Are placements Online or offline ?</h6>
              <h5>Asked by : EDT</h5>
              <div className="query__card-details">
                <textarea placeholder="type your answer...." value={"dasms smsdsa "} />
              </div>
            </form> 
          </div>
          
          <div className="query__card"> 
            <form onSubmit={handleSubmit(onSubmit)}>
              <h6>Ques. Are placements Online or offline ?</h6>
              <h5>Asked by : EDT</h5>
              <div className="query__card-details">
                <textarea placeholder="type your answer...." value={"dasms smsdsa dasd"} />
              </div>
            </form> 
          </div>

          <div className="query__card"> 
            <form onSubmit={handleSubmit(onSubmit)}>
              <h6>Ques.  Are placements Online or offlineAre placements Online or offlineAre placements Online or offline Are placements Online or offline ?</h6>
              <h5>Asked by : EDT</h5>
              <div className="query__card-details">
                <textarea placeholder="type your answer...." value={"dasdasdas das dasd asd asd hume kya pta"} />
              </div>
            </form> 
          </div>
        </main>
      </div>

    </div>
  );
};

export default Queries;
