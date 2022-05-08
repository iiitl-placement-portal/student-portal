import React from "react";
import { useForm } from "react-hook-form";
import Footer from "./components/Footer";

let num = 0;

const Input = ({ name, type, label, register, required }) => {
  // num++;
  num = num + 1;
  console.log(num);
  // const numt= num;
  let clas = "";
  if (
    label === "jobDescription" ||
    label === "qualificationNeeded" ||
    label === "yourRole" ||
    label === "aboutCompany" ||
    label === "packageBreakup" ||
    label === "evaluationPattern"
  ) {
    clas = "AddJob__form-text";

    return (
      <div className={clas}>
        <label>
          {num / 2}. {name}
          {required ? <sup>*</sup> : <sup></sup>}
        </label>
        <textarea
          type={type}
          required={required}
          {...register(label, { required })}
          placeholder={name}
        />
      </div>
    );
  } else {
    if (type === "checkbox") clas = "AddJob__form-checkbox";
    return (
      <div className={clas}>
        <label>
          {num / 2}. {name}
          {required ? <sup>*</sup> : <sup></sup>}
        </label>
        <input
          type={type}
          required={required}
          {...register(label, { required })}
          placeholder={name}
        />
      </div>
    );
  }
};

const AddJob = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col overflow-hidden">
      {/*  Page content */}
      <div className="AddJob__section">
        <div className="AddJob__section-heading">
          <img className="AddJob__section-heading" src="/images/logo-iiitl.png" />
          <h3 >Add Job</h3>
        </div>
        <p className="AddJob__section-para">
          <sup>*</sup> marked are required
        </p>
        <main className="AddJob__container flex-grow">
          <form className="AddJob__form" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input
                type="string"
                name="Company Name"
                label="CompanyName"
                register={register}
                required
              />
              <Input
                type="string"
                name="Job ID"
                label="jobID"
                register={register}
                required
              />
              <Input
                type="string"
                name="Expected Skills"
                label="expectedSkills"
                register={register}
                
              />
              <Input
                type="date"
                name="Deadline"
                label="deadlineDate"
                register={register}
                required
              />
              <Input
                type="string"
                name="Job Role"
                label="jobRole"
                register={register}
                required
              />
              <Input
                type="string"
                name="Posting Location"
                label="postingLocation"
                register={register}
              />
              <Input
                type="number"
                name="Package"
                label="package"
                register={register}
                required
              />
              <Input
                type="string"
                name="Job Type"
                label="recruitmentType"
                register={register}
                required
              />
              <Input
                type="string"
                name="duration"
                label="duration"
                register={register}
                
              />
              <Input
                type="string"
                name="minCgpa"
                label="minCgpa"
                register={register}
                required
              />
              <Input
                type="string"
                name="Max Backlogs Allowed"
                label="maxBacklogsAllowed"
                register={register}
                required
              />
              <Input
                type="number"
                name="Batches Allowed"
                label="batchesAllowed"
                register={register}
                required
              />
              <Input
                type="checkbox"
                name="Female Only ?"
                label="femaleOnly"
                register={register}
              />
              <Input
                type="text"
                name="Description"
                label="jobDescription"
                register={register}
                required
              />
              <Input
                type="textarea"
                name="About Company"
                label="aboutCompany"
                register={register}
                required
              />
              <Input
                type="textarea"
                name="Your Role"
                label="yourRole"
                register={register}
                required
              />
              <Input
                type="text"
                name="Qualification needed"
                label="qualificationNeeded"
                register={register}
                required
              />
              <Input
                type="textarea"
                name="Evaluation Pattern"
                label="evaluationPattern"
                register={register}
                required
              />
              <Input
                type="textarea"
                name="packageBreakup"
                label="packageBreakup"
                register={register}
                required
              />
              
            </div>
            <input className="AddJob__submit" type="submit" value="Submit" />
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AddJob;
