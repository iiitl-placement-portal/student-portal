import React , {useState} from 'react';
import { useForm } from 'react-hook-form';

const Queries = ({title}) => {
  const [formData, setFormData] = useState("")

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    alert("query Submitted");
    setFormData("");
  }
  console.log(errors);

    return (
      <div className="flex flex-col overflow-hidden">
        {/*  Page content */}
        <div className="stuquery__section">
          <h3 className="stuquery__section-heading">{title}</h3>
          <main className="stuquery__container flex-grow">
            <form className='stuquery__form' onSubmit={handleSubmit(onSubmit)}>
              <textarea {...register("query", {required: true})} />

              <input type="submit" value={"Submit"} />
            </form>

            <div> </div>

          </main>
        </div>
        <div className="stuquery__section">
          <h3 className="stuquery__section-heading">Old Queries</h3>
          <main className="stuquery__container flex-grow">
            
            <div className="query__section">
              <main className="query__container ">
                
                <div className="query__card"> 
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h6>Ques. Are placements Online or offline ?</h6>
                    <div className="query__card-details">
                      <textarea placeholder="type your answer...." value={"dasms smsdsa "} />
                    </div>
                  </form> 
                </div>
                
                <div className="query__card"> 
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h6>Ques. Are placements Online or offline ?</h6>
                    <div className="query__card-details">
                      <textarea placeholder="type your answer...." value={"dasms smsdsa dasd"} />
                    </div>
                  </form> 
                </div>

                <div className="query__card"> 
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h6>Ques.  Are placements Online or offlineAre placements Online or offlineAre placements Online or offline Are placements Online or offline ?</h6>
                    <div className="query__card-details">
                      <textarea placeholder="type your answer...." value={"dasdasdas das dasd asd asd hume kya pta"}  />
                    </div>
                  </form> 
                </div>
              </main>
            </div>

          </main>
        </div>
      </div>
    );
}

export default Queries;
{/* <div className="query__card"> 
  <form onSubmit={handleSubmit(onSubmit)}>
    <h6>Ques.  Are placements Online or offlineAre placements Online or offlineAre placements Online or offline Are placements Online or offline ?</h6>
    <h5>Asked by : EDT</h5>
    <div className="query__card-details">
      <textarea {...register("Query", {})}    placeholder="type your answer...." />

      <input className="query_submit" type="submit"  value={"Reply"} />
    </div>
  </form> 
</div> */}