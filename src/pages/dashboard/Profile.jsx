import { useState } from "react";
import { Wrapper } from "../../components";
import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../features/user/userSlice";
import { toast } from "react-toastify";

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    location: user?.location || "",
  });

  const valueHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, lastName, email, location } = userData;

    if (!name || !lastName || !email || !location) {
      toast.error("please fill all out all fields");
      return;
    }

    dispatch(updateUser({ name, lastName, email, location }));
  };

  return (
    <Wrapper center>
      <form
        onSubmit={submitHandler}
        className="relative rounded-lg bg-form p-4 pt-8 text-main shadow-md"
      >
        <div className="absolute -top-6 left-0 right-0 z-30 mx-8 rounded-lg bg-main p-6 text-form">
          <h1 className="text-center text-lg">Profile</h1>
        </div>

        <div className="mt-10 grid grid-cols-1 grid-rows-4 gap-y-5 md:grid-cols-2 md:grid-rows-2 md:gap-8 md:p-4">
          <TextField
            fullWidth
            id="outlined-name"
            name="name"
            label="First Name"
            type="name"
            value={userData.name}
            onChange={valueHandler}
          />
          <TextField
            fullWidth
            id="outlined-lastName"
            name="lastName"
            label="Last Name"
            type="lastName"
            value={userData.lastName}
            onChange={valueHandler}
          />
          <TextField
            fullWidth
            id="outlined-email"
            name="email"
            label="Email"
            type="email"
            value={userData.email}
            onChange={valueHandler}
          />
          <TextField
            fullWidth
            id="outlined-location"
            name="location"
            label="Location"
            type="location"
            value={userData.location}
            onChange={valueHandler}
          />
        </div>
        <div className="px-4">
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={submitHandler}
            className="mt-6 mb-5 p-3"
            disabled={isLoading}
          >
            Save Changes
          </Button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
