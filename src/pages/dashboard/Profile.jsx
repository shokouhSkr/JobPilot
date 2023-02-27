import { Wrapper } from "../../components";
import { TextField, Button } from "@mui/material";

const Profile = () => {
  return (
    <Wrapper>
      <form className="relative rounded-lg bg-form p-4 pt-8 text-main shadow-md">
        <div className="absolute -top-6 left-0 right-0 z-40 mx-8 rounded-lg bg-main p-6 text-form">
          <h1 className="text-center text-lg">Profile</h1>
        </div>

        <div className="mt-10 grid grid-cols-1 grid-rows-4 gap-y-5 md:grid-cols-2 md:grid-rows-2 md:gap-8 md:p-4">
          <TextField
            fullWidth
            id="outlined-firstName"
            name="nafirstNameme"
            label="First Name"
            type="firstName"
            // value={values.name}
            // onChange={valueHandler}
          />
          <TextField
            fullWidth
            id="outlined-lastName"
            name="lastName"
            label="Last Name"
            type="lastName"
            // value={values.lastName}
            // onChange={valueHandler}
          />
          <TextField
            fullWidth
            id="outlined-email"
            name="email"
            label="Email"
            type="email"
            // value={values.email}
            // onChange={valueHandler}
          />
          <TextField
            fullWidth
            id="outlined-location"
            name="location"
            label="Location"
            type="location"
            // value={values.location}
            // onChange={valueHandler}
          />
        </div>
        <div className="px-4">
          <Button fullWidth variant="contained" size="large" className="mt-6 mb-5 p-3">
            Save Changes
          </Button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
