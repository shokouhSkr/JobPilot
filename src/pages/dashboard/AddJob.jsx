import React, { useEffect } from "react";
import { Wrapper, BasicSelect } from "../../components";
import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { changeValueHandler, clearInputs } from "../../features/job/jobSlice";
import { createJob, editJob } from "../../features/job/jobSlice";

const AddJob = () => {
  const {
    isLoading,
    statusOptions,
    jobTypeOptions,
    position,
    jobLocation,
    company,
    jobType,
    status,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const clearHandler = () => {
    dispatch(clearInputs());
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error("Please fill all the fields");
      return;
    }

    if (isEditing) {
      dispatch(
        editJob({ jobId: editJobId, job: { position, jobLocation, company, jobType, status } })
      );
      return;
    }

    dispatch(createJob({ position, company, jobType, status, jobLocation }));
  };

  const valueHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch(changeValueHandler({ name, value }));
  };

  useEffect(() => {
    if (!isEditing) dispatch(changeValueHandler({ name: "jobLocation", value: user.location }));
  }, []);

  return (
    <Wrapper>
      <form
        onSubmit={submitHandler}
        className="relative rounded-lg bg-form p-4 pt-8 text-main shadow-md"
      >
        <div className="absolute -top-6 left-0 right-0 z-30 mx-8 rounded-lg bg-main p-6 text-form">
          <h1 className="text-center text-lg">{isEditing ? "Edit Job" : "Add Job"}</h1>
        </div>

        <div className="mt-10 grid grid-cols-1 grid-rows-4 gap-y-5 md:grid-cols-2 md:grid-rows-2 md:gap-8 md:p-4">
          <TextField
            fullWidth
            id="outlined-position"
            name="position"
            label="Position"
            type="text"
            value={position}
            onChange={valueHandler}
          />
          <TextField
            fullWidth
            id="outlined-company"
            name="company"
            label="Company"
            type="text"
            value={company}
            onChange={valueHandler}
          />
          <TextField
            fullWidth
            id="outlined-location"
            name="jobLocation"
            label="Location"
            type="text"
            value={jobLocation}
            onChange={valueHandler}
          />
          <BasicSelect
            name="status"
            value={status}
            label="Status"
            options={statusOptions}
            onChange={valueHandler}
          />
          <BasicSelect
            name="jobType"
            value={jobType}
            label="Job Type"
            options={jobTypeOptions}
            onChange={valueHandler}
          />
        </div>

        <div className="flex gap-2 px-4">
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={submitHandler}
            className="mt-6 mb-5 p-3"
            disabled={isLoading}
          >
            Submit
          </Button>
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={clearHandler}
            className="mt-6 mb-5 p-3"
          >
            Clear
          </Button>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
