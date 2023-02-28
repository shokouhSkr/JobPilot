import { Wrapper, SelectTextFields } from "../../components";
import { TextField, Button } from "@mui/material";

const statusOptions = [
  {
    value: "interview",
    label: "interview",
  },
  {
    value: "pending",
    label: "pending",
  },
  {
    value: "declined",
    label: "declined",
  },
];

const jobTypeOptions = [
  {
    value: "full-time",
    label: "full-time",
  },
  {
    value: "part-time",
    label: "part-time",
  },
  {
    value: "remote",
    label: "remote",
  },
  {
    value: "intership",
    label: "intership",
  },
];

const AddJob = () => {
  return (
    <Wrapper center>
      <form
        // onSubmit={submitHandler}
        className="relative rounded-lg bg-form p-4 pt-8 text-main shadow-md"
      >
        <div className="absolute -top-6 left-0 right-0 z-30 mx-8 rounded-lg bg-main p-6 text-form">
          <h1 className="text-center text-lg">Add Job</h1>
        </div>

        <div className="mt-10 grid grid-cols-1 grid-rows-4 gap-y-5 md:grid-cols-2 md:grid-rows-2 md:gap-8 md:p-4">
          <TextField
            fullWidth
            id="outlined-position"
            name="position"
            label="Position"
            type="position"
            // value={userData.name}
            // onChange={valueHandler}
          />
          <TextField
            fullWidth
            id="outlined-company"
            name="company"
            label="Company"
            type="company"
            // value={userData.lastName}
            // onChange={valueHandler}
          />
          <TextField
            fullWidth
            id="outlined-location"
            name="location"
            label="Location"
            type="location"
            // value={userData.email}
            // onChange={valueHandler}
          />
          <SelectTextFields label="Status" options={statusOptions} />
          <SelectTextFields label="Job Type" options={jobTypeOptions} />
        </div>

        <div className="flex gap-2 px-4">
          <Button
            fullWidth
            variant="contained"
            size="large"
            // onClick={submitHandler}
            className="mt-6 mb-5 p-3"
            // disabled={isLoading}
          >
            Submit
          </Button>
          <Button
            fullWidth
            variant="contained"
            size="large"
            // onClick={clearHandler}
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
